import React from 'react'
import { movies } from './movies.js'

class Poster extends React.Component {
    constructor() {
        super();
        this.state = {
            // overview: "",
            // poster_path: "",
            // title: "",
            // vote_average: '', //인트...

            movieList: []
        }
    }

    componentDidMount() {
        this.setState({
            movieList: movies.results
        })
    }

    render() {
        return (
            <div>
                {this.state.movieList.map(movie => (
                    <div key={movie.id}>
                        <p>overview={movie.overview}</p>
                        <img src={movie.poster_path}></img>
                        <p>title={movie.title}</p>
                        <p>vote_average={movie.vote_average}</p>
                </div>
                ))}
            </div>
        );
    }

}

export default Poster
