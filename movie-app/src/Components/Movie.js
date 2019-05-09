import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}></MoviePoster>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

/*class MoviePoster extends Component {
    render() {
        return (
            <img className="poster" src={this.props.poster}></img>
        )
    }
}
*/

//state가 없는 컴포넌트
function MoviePoster({poster}) {
    return (
        <img className="poster" src={poster}></img>
    )
}

export default Movie;