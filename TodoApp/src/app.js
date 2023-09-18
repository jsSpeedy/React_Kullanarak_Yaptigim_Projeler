//event : Bir React olayı, bir kullanıcı bir öğeye tıkladığında, bir klavye tuşuna bastığında veya bir öğedeki metni değiştirdiğinde gibi bir eylemi tetikleyen bir JavaScript nesnesidir.

//https://legacy.reactjs.org/docs/events.html#form-events

var root = ReactDOM.createRoot(document.getElementById("root"));

var products = [
  {
    name: "Iphone 15",
    price: 60000,
  },
  {
    name: "Iphone 16",
    price: 70000,
  },
  {
    name: "Iphone 17",
    price: 80000,
  },
];

var selectedProduts = [];

function selectProduct(event, p_name) {
  console.log(event.target, p_name);
  if (!selectedProduts.includes(p_name)) {
    selectedProduts.push(p_name);
    console.log(selectedProduts);
  }
  renderApp();
}

function saveProduct(event) {
  event.preventDefault();
  var p_name = event.target.elements.p_name.value; //event.target form bilgisini getirir. elements ise form içerisindeki elementlerin bilgilerini getirir id vs.
  var p_price = event.target.elements.p_price.value;
  var product = {
    name: p_name,
    price: p_price,
  };
  products.push(product);
  event.target.elements.p_name.value = "";
  event.target.elements.p_price.value = "";
  renderApp();
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 id="header">Ürün Listesi </h1>
        <h3>Seçilen Ürünler: {selectedProduts.length}</h3>
      </div>
    );
  }
}

class NewProduct extends React.Component {
  render() {
    return (
      <form onSubmit={saveProduct}>
        <input type="text" name="p_name" id="p_name" />
        <input type="text" name="p_price" id="p_price" />
        <button type="submit">Ürün Ekle</button>
      </form>
    );
  }
}

class ProductList extends React.Component {
  render() {
    return this.props.products.map((product, index) => (
      <Product product={product} key={index} />
    ));
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="product-details">
        {<h2>{this.props.product.name}</h2>}
        {this.props.product.price}
        <button
          type="button"
          onClick={(event) => selectProduct(event, this.product.name)}
        >
          Ekle
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  //render() metodu Component üzerinden otomatik olarak çağrılan bir metoddur.
  render() {
    return (
      <div>
        <Header />
        <NewProduct />
        <ProductList products={products} />
      </div>
    );
  }
}

root.render(<App />);

//event.target = tıkladığımız buton neyse onu getirir.
//<form onSubmit={saveProduct}> = click olayı vermek yerine form eventlerini kullanarak ilişkilendirecek olduğumuz fonksiyonu veriririz.
