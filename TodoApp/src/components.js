//Components = React uygulamalarında her bir bölümü temsil eder yani projemiz büyüdüğü aşamada projemizim parçalarını belli componentsler belli classlar altına alarak uygulamanın müdahale edilebilir yani proje büyüdüğünde karmaşıklıktan uzak bir şekilde uygulama geliştirmemize yardımcı olur.

//Components tanımlarken 2 farklı yöntem vardır.
//function component ve class component

//props = özel bir fonksiyon olduğu için props yazdık. props parametre olarak propertiesi temsil eder. Propsa dışarıdan parametre göndermek için Headerı tanımlamış olduğumuz yerden parametre veririz. Yani function nereden çağırdıysak oradan parametre gireriz. TodoApp classı altında <Header title="Todo uygulaması" /> gibi.
// function Header(props) {
//   return (
//     <div>
//       <h1>{props.title}</h1> <p>{props.description}</p>
//     </div>
//   );
// }
//extends diğerek özel bir component sınıfından türetiyor React.Component den component özelliğini alıyor ve bunu Header a aktarıyor.
//React.Component içerisinde props parametresi bulunur. Herhangi bir props tanımlaması yapmaya gerek yok.
//this diyerek içerikleri yazdırabiliriz çünkü Headerdan türetilen nesne baz alınmış oluyor.
//her class tanımlamasının bir props parametresi bulunur. Ancak props parametresi içerisine gidecek olan değerler her nesne için farklıdır. Yani bir sınıftan türetilen iki tane nesneden bahsettiğimiz için this dememiz gerekiyor.
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.description}</p>
//       </div>
//     );
//   }
// }

//https://legacy.reactjs.org/docs/react-component.html#the-component-lifecycle

var root = ReactDOM.createRoot(document.getElementById("root"));

class TodoApp extends React.Component {
  //4- buradaki constructor, Component içerisinde gelen props bilgisini ezer. Kendi yapıcı fonksiyonumuzu çağırmış oluyoruz.
  constructor(props) {
    super(props); //React.Component içerisinde ki constructora almış olduğumuz props bilgisini göndeririz.
    this.clearItems = this.clearItems.bind(this); //burada ilgili metodu çağırıp .bind ile this objejisi geri tanımlarız.
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      gorevler: ["görev 1", "görev 2", "görev 3"],
    };
  }

  //
  deleteItem(item) {
    this.setState((prevState) => {
      const arr = prevState.gorevler.filter((i) => {
        return item != i;
      });
      return {
        gorevler: arr,
      };
    });
  }

  //3- this.props.items ulaşabilmek için yani propsa erişebilmek için constructor tanımlamız gerekiyor.
  clearItems() {
    this.setState({
      gorevler: [],
    });
  }

  //prevState = önceki durumu ele al demiş ooluyoruz. yani şöyle yaptık clearItems() ile gorevler listesini boşalttığımız için eski gorevler listesine ihtiyacımız var görev ekleyebilmemiz için o yüzden burada prevState kullandık önceki durumu ele almış oldu.
  addItem(item) {
    if (this.state.gorevler.indexOf(item) > -1) {
      return "aynı elemanı ekleyemezsiniz";
    }

    this.setState((prevState) => {
      return {
        gorevler: prevState.gorevler.concat(item), //concat: dizi üzerine yeni bir eleman ekler. tek bir eleman yada birden fazla olabilir.
      };
    });
  }

  //1- Component oluşturulup DOM içerisine yerleştirilene kadar, constructor() ilk aşamada çağrılır daha sonra render() metodu çağrılır(render metodu otomatik olarak çağrılır)
  render() {
    const data = {
      baslik: "Todo Application",
      aciklama: "Bekleyen Görevler",
    };

    return (
      <div className="container my-3">
        <div className="card">
          <div className="card-header">
            <Header title={data.baslik} description={data.aciklama} />
          </div>
          <div className="card-body">
            <TodoList
              items={this.state.gorevler}
              clear={this.clearItems}
              deleteItem={this.deleteItem}
            />
          </div>
          <div className="card-footer">
            <NewItem addItem={this.addItem} />
          </div>
        </div>
      </div>
    );
  }

  //2- ondan sonra componentDidMount() metodu çağrılır yani biz bir içeriği oluşturduk ve bu içerik render edildikten sonra otomatik olarak çağırmak istediğimiz metod componentDidMount() metodu olur.
  componentDidMount() {
    const json_obj = localStorage.getItem("items");
    const items = JSON.parse(json_obj);
    if (items) {
      this.setState({
        gorevler: items,
      });
    }
  }

  //3-Yada bir component içerisinde güncelleme işlemi yaptık yani güncelleme componentin propsu yada state içerisinde oldu güncelleme işlemi gerçekleştikten sonra çağırmak otomatik olarak çağırmak istediğimiz metod componentDidUpdate() metodudur.
  //componentin propsu yada state üzerinde bir güncelleme yapıldığı zaman componentDidUpdate çalışır burada prevProps,prevState önceki verileri ele alır.
  //State içerisinde olan eski datalarla yeni dataları karşılaştırırız State üzerinde bir güncelleme yapıldıysa bu bilgileri local storage içerisine kaydedebiliriz. Daha sonraki aşamada da component yüklendiği aşamada yani componentDidMount aşamasında local storage içerisinki bilgileri uygulama işlemine aktarabiliriz.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.gorevler.length != this.state.gorevler.length) {
      const json_str = JSON.stringify(this.state.gorevler); //JSON.stringify = Uygulama tarafından kullanılan objeyi string veriye çevirir.
      localStorage.setItem("items", json_str);
    }
  }

  //4-  Yada bir componenti DOM üzerinden sildiğimiz anda çağrılacak olan componentWillUnmount() metodudur.
  componentWillUnmount() {
    console.log("component silindi.");
  }
}

const Header = (props) => {
  return (
    <div className="text-center">
      <h1 className="h3">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const TodoList = (props) => {
  //1- render() metodu Component üzerinden otomatik olarak çağrılan bir metoddur. render() metodu çağrıldığı aşamada this objesi TodoList den türetilen nesneyle ilişkilendirilir.
  //2- this.clearItems da ise bu durum farklıdır çünkü referans olarak çağrılır. Referans olarak çağrıldığı için clearItems props parametresine erişemiyor.
  return (
    <div>
      <ul className="list-group">
        {props.items.map((gorev, index) => (
          <TodoItem key={index} item={gorev} deleteItem={props.deleteItem} />
        ))}
      </ul>
      {props.items.length > 0 ? (
        <p>
          <button
            className="btn btn-outline-danger float-end mt-3"
            onClick={props.clear}
          >
            Temizle
          </button>
        </p>
      ) : (
        <div className="alert alert-warning mb-0">
          <p className="mb-0">Görev Ekleyiniz</p>
        </div>
      )}
    </div>
  );
};

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: "",
    };
  }

  //burada neden .bind kullanmadık çünkü dizi olarak tanımlamadık.
  onFormSubmit(e) {
    e.preventDefault();

    const item = e.target.elements.txtItem.value.trim(); ////target bize form nesnesini getirir. elements ile formun içerisindeki neseneleri getirir.
    if (item) {
      e.target.elements.txtItem.value = "";
      const error = this.props.addItem(item);
      this.setState({
        error: error,
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <input className="form-control" type="text" name="txtItem" />
            <button className="btn btn-primary" type="submit">
              Ekle
            </button>
          </div>
        </form>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("newItem component güncellendi.");
  }
}

const TodoItem = (props) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <span>{props.item}</span>

      <button
        className="btn btn-danger btn-sm "
        onClick={() => {
          props.deleteItem(props.item);
        }}
      >
        X
      </button>
    </li>
  );
};

root.render(<TodoApp />);
