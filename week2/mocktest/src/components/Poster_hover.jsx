import React from 'react'
import { movies } from './movies.js'
import './Poster_hover.css'

const base_url = "https://image.tmdb.org/t/p"; // 환경변수로 설정해야지...
const file_size = "/w200";

class Poster_hover extends React.Component {

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
        //fetch("")
        this.setState({
            movieList: movies.results
        })
    }

    render() {
        
    // const base_url = "https://image.tmdb.org/t/p";
    // const file_size = "/w400";
        return (
            <div>
                {this.state.movieList.map(movie => (
                    <div key={movie.id}>
                        {/* <img src={base_url + file_size + movie.poster_path}></img> */}
                        <p>{movie.title}</p>
                        {/* <p>{movie.vote_average}</p> */}
                        <p>{movie.overview}</p>
                </div>
                ))}
            </div>
        );
    }

}

export default Poster_hover
