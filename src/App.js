import logo from './logo.svg';
import './App.css';
import { Component } from "react"

//Component de Class-state
class App extends Component {

  state = {
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
    ],
  }

  render() {

    let { posts } = this.state;

    return (
      <div className="App">
        {posts.map(
          post => (
            <div key={post.id}>
              <h1 >{post.title}</h1>,
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