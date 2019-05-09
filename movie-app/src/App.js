import React, { Component } from 'react';
import './Components/Movie.js';
import Movie from './Components/Movie.js';

class App extends Component {
  state = {

  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(() => {
      this.setState({
        movies: [
          //...this.state.movies, //기존 목록 유지(infinite scroll)
          {
            title : "Iron Man",
            poster : "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg"
          },
          {
            title : "Thor",
            poster : "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg"
          },
          {
            title : "Hulk",
            poster : "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg"
          },
          {
            title : "Captin America",
            poster : "https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>
    })
    return movies
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        { 
          //{this.state.greeting}
        }
        {
          //{this.state.movies.map((movie, index) => {return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>})}
        }
        { /*state가 있는지 없는지 판단 */ }
        {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
    }
}

export default App;
