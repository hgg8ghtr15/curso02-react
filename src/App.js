import logo from './logo.svg';
import './App.css';
import { Component } from "react"

//Component de Class-state
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Bem Vindo ao React - Fábio lucas Marconi</p>
          <img src={logo} className="App-logo" alt="Logo"></img>
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
