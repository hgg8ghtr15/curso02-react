// import logo from './logo.svg';
import './App.css';
import { Component } from "react"

//Component de Class-state
class App extends Component {

  state = {
    posts: [],
    contador: 0,
  }
  TimeOut = null

  // Antes do render
  componentDidMount() {
    this.handlepopular()
    this.handleTimeout()
  }

  //Apos render
  componentDidUpdate() {
    this.handleTimeout()
  }

  componentWillUnmount(){
    clearTimeout(this.TimeOut)
  }

  // metodos criados por min arrow funciones sem this
  handlepopular = () => {
    setTimeout(() => {
      this.setState(
        {
          posts: [
            {
              id: 1,
              title: 'Hello',
              body: 'Testo Aqui'
            },
            {
              id: 2,
              title: 'Hello',
              body: 'Testo Aqui'
            }, {
              id: 3,
              title: 'Hello',
              body: 'Testo Aqui'
            }
          ]
        }
      )
    }, 1000)
  }

  handleTimeout = () => {
    let { contador } = this.state
    this.limparTimeOut = setTimeout(() => {
      this.setState({ contador: contador + 1 })
    },5000)
    
  }

  render() {

    let { posts, contador } = this.state;

    return (
      <div className="App">
        <p>Contador: {contador}</p>
        {posts.map(
          post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          )
        )}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;