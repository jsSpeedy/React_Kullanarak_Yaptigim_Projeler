"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);
  var _super = _createSuper(TodoApp);
  //4- buradaki constructor, Component içerisinde gelen props bilgisini ezer. Kendi yapıcı fonksiyonumuzu çağırmış oluyoruz.
  function TodoApp(props) {
    var _this;
    _classCallCheck(this, TodoApp);
    _this = _super.call(this, props); //React.Component içerisinde ki constructora almış olduğumuz props bilgisini göndeririz.
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this)); //burada ilgili metodu çağırıp .bind ile this objejisi geri tanımlarız.
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.state = {
      gorevler: ["görev 1", "görev 2", "görev 3"]
    };
    return _this;
  }

  //
  _createClass(TodoApp, [{
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.gorevler.filter(function (i) {
          return item != i;
        });
        return {
          gorevler: arr
        };
      });
    }

    //3- this.props.items ulaşabilmek için yani propsa erişebilmek için constructor tanımlamız gerekiyor.
  }, {
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        gorevler: []
      });
    }

    //prevState = önceki durumu ele al demiş ooluyoruz. yani şöyle yaptık clearItems() ile gorevler listesini boşalttığımız için eski gorevler listesine ihtiyacımız var görev ekleyebilmemiz için o yüzden burada prevState kullandık önceki durumu ele almış oldu.
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (this.state.gorevler.indexOf(item) > -1) {
        return "aynı elemanı ekleyemezsiniz";
      }
      this.setState(function (prevState) {
        return {
          gorevler: prevState.gorevler.concat(item) //concat: dizi üzerine yeni bir eleman ekler. tek bir eleman yada birden fazla olabilir.
        };
      });
    }

    //1- Component oluşturulup DOM içerisine yerleştirilene kadar, constructor() ilk aşamada çağrılır daha sonra render() metodu çağrılır(render metodu otomatik olarak çağrılır)
  }, {
    key: "render",
    value: function render() {
      var data = {
        baslik: "Todo Application",
        aciklama: "Bekleyen Görevler"
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "container my-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-header"
      }, /*#__PURE__*/React.createElement(Header, {
        title: data.baslik,
        description: data.aciklama
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.gorevler,
        clear: this.clearItems,
        deleteItem: this.deleteItem
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-footer"
      }, /*#__PURE__*/React.createElement(NewItem, {
        addItem: this.addItem
      }))));
    }

    //2- ondan sonra componentDidMount() metodu çağrılır yani biz bir içeriği oluşturduk ve bu içerik render edildikten sonra otomatik olarak çağırmak istediğimiz metod componentDidMount() metodu olur.
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var json_obj = localStorage.getItem("items");
      var items = JSON.parse(json_obj);
      if (items) {
        this.setState({
          gorevler: items
        });
      }
    }

    //3-Yada bir component içerisinde güncelleme işlemi yaptık yani güncelleme componentin propsu yada state içerisinde oldu güncelleme işlemi gerçekleştikten sonra çağırmak otomatik olarak çağırmak istediğimiz metod componentDidUpdate() metodudur.
    //componentin propsu yada state üzerinde bir güncelleme yapıldığı zaman componentDidUpdate çalışır burada prevProps,prevState önceki verileri ele alır.
    //State içerisinde olan eski datalarla yeni dataları karşılaştırırız State üzerinde bir güncelleme yapıldıysa bu bilgileri local storage içerisine kaydedebiliriz. Daha sonraki aşamada da component yüklendiği aşamada yani componentDidMount aşamasında local storage içerisinki bilgileri uygulama işlemine aktarabiliriz.
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.gorevler.length != this.state.gorevler.length) {
        var json_str = JSON.stringify(this.state.gorevler); //JSON.stringify = Uygulama tarafından kullanılan objeyi string veriye çevirir.
        localStorage.setItem("items", json_str);
      }
    }

    //4-  Yada bir componenti DOM üzerinden sildiğimiz anda çağrılacak olan componentWillUnmount() metodudur.
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component silindi.");
    }
  }]);
  return TodoApp;
}(React.Component);
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h3"
  }, props.title), /*#__PURE__*/React.createElement("p", null, props.description));
};
var TodoList = function TodoList(props) {
  //1- render() metodu Component üzerinden otomatik olarak çağrılan bir metoddur. render() metodu çağrıldığı aşamada this objesi TodoList den türetilen nesneyle ilişkilendirilir.
  //2- this.clearItems da ise bu durum farklıdır çünkü referans olarak çağrılır. Referans olarak çağrıldığı için clearItems props parametresine erişemiyor.
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, props.items.map(function (gorev, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      key: index,
      item: gorev,
      deleteItem: props.deleteItem
    });
  })), props.items.length > 0 ? /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-danger float-end mt-3",
    onClick: props.clear
  }, "Temizle")) : /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning mb-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-0"
  }, "G\xF6rev Ekleyiniz")));
};
var NewItem = /*#__PURE__*/function (_React$Component2) {
  _inherits(NewItem, _React$Component2);
  var _super2 = _createSuper(NewItem);
  function NewItem(props) {
    var _this2;
    _classCallCheck(this, NewItem);
    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: ""
    };
    return _this2;
  }

  //burada neden .bind kullanmadık çünkü dizi olarak tanımlamadık.
  _createClass(NewItem, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim(); ////target bize form nesnesini getirir. elements ile formun içerisindeki neseneleri getirir.
      if (item) {
        e.target.elements.txtItem.value = "";
        var error = this.props.addItem(item);
        this.setState({
          error: error
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/React.createElement("input", {
        className: "form-control",
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-primary",
        type: "submit"
      }, "Ekle"))));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log("newItem component güncellendi.");
    }
  }]);
  return NewItem;
}(React.Component);
var TodoItem = function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: "list-group-item d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/React.createElement("span", null, props.item), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm ",
    onClick: function onClick() {
      props.deleteItem(props.item);
    }
  }, "X"));
};
root.render( /*#__PURE__*/React.createElement(TodoApp, null));
