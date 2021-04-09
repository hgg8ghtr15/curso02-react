// import logo from './logo.svg';
import './App.css';
import { Component } from "react"

//Component de Class-state
class App extends Component {

  state = {
    posts: [],
  }

  // Antes do render
  componentDidMount() {
    this.loadPost()
  }

  loadPost = async () => {
    //Forma simples de fazer
    // fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())
    // .then(posts => this.setState({ posts }))

    //forma avansada.
    let postsRespose = fetch("https://jsonplaceholder.typicode.com/posts")
    let photosRespose = fetch("https://jsonplaceholder.typicode.com/photos")

    let [posts, photos] = await Promise.all([postsRespose, photosRespose,])
    
    let postsJson = await posts.json()
    let photosJson = await photos.json()

    let postsAndPhotos = postsJson.map((post, index) =>{
      return {...post, cover: photosJson[index].url }
    })

    this.setState({ posts: postsAndPhotos })
  }

  //Apos render
  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {

    let { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(
            post => (
              <div className="post">
                <img src={post.cover} alt={post.title}></img>
                <div key={post.id} className="post-content">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
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