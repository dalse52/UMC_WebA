import React from 'react'
import { movies } from './movies.js'
// import './Poster.css'

const base_url = "https://image.tmdb.org/t/p"; // 환경변수로 설정 -> 나중에
const file_size = "/w200";

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
        //fetch("")
        this.setState({
            movieList: movies.results
        })
    }

    render() {
        
    // const base_url = "https://image.tmdb.org/t/p";
    // const file_size = "/w400";
    
    // 구조분해할당 하기.
        return (
            <>
                {this.state.movieList.map(movie => (
                    <div key={movie.id} className='content'>
                        <img src={base_url + file_size + movie.poster_path}></img>
                        <div>
                        <span className='title'>{movie.title}</span>
                        <span className='average'>{movie.vote_average}</span>
                        {/* <p>overview={movie.overview}</p> */}
                        </div>
                    </div>
                ))}
            </>
        );
    }

}

export default Poster
