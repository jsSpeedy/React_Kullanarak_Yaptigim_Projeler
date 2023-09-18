var root = ReactDOM.createRoot(document.getElementById("root"));

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Emre Aydın",
      email: "info@emreaydin.com",
    };

    this.changeEmail = this.changeEmail.bind(this);
  }

  changeEmail() {
    this.setState({
      name: "Çınar Turan",
      email: "info@çınarturan.com",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>{this.state.email}</p>
        <button onClick={this.changeEmail}>Güncelle</button>
      </div>
    );
  }
}

root.render(<User />);
