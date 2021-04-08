import logo from './logo.svg';
import './App.css';
import { Component } from "react"

//Component de Class-state
class App extends Component {
  //forma antiga de fazer State
  // constructor(props)
  // super(props)
  // this.handleClique = this.handleClique.bind(this)

  //Forma Moderna de fazer State - Destruct
  state = {
    nome: "Fabio Lucas Marconi",
    contador: 0
  }

  //arrow function "handle" = Lidar com
  handleClique = () => {
    // alert("Foi clicado")
    this.setState({ nome: prompt('Digite seu nome.') })
  }

  handleAClique = (event) => {
    event.preventDefault();
    let { contador } = this.state
    this.setState({ contador: contador + 1 })
  }

  render() {
    //forma antiga de fazer State
    // let nome2 = this.state.nome;

    //Forma Moderna de fazer State
    let { nome, contador } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <p onClick={this.handleClique}>Clique Aqui Para mudar o <strong>Nome</strong></p>
          <p>Bem Vindo ao React - {nome}</p>
          <img src={logo} className="App-logo" alt="Logo"></img>
          <a
            onClick={this.handleAClique}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para iniciar o contador.
          </a>
          <p>{contador}</p>

        </header>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
