import React, {Component} from 'react';
import '../movieDetails/movieDetails.css';

class MovieDetails extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const { movie } = this.props
        return (
            <div className="movieDetails">
                <img src={movie.poster_path}/>
                <div className="movieText">
                    <h2>{movie.title}</h2>
                    <span className="rate">{movie.vote_average}</span>
                    <p className="awards">{movie.genres.join(' & ')}</p>
                    <p>
                        <span className="releaseYear">{new Date(movie.release_date).getFullYear()}</span>
                        <span className="duration">{movie.runtime} min</span>
                    </p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        );
    }
}

export default MovieDetails