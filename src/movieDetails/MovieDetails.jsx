import React, {Component} from 'react'
import '../movieDetails/movieDetails.css'
import { withRouter } from 'react-router-dom'
/*
export const MovieDetails = () => {
            /*<div className="movieDetails">
                /*<img src={props.item.poster_path}/>
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
}*/

class MovieDetails extends Component {
    render() {
        const {match} = this.props
        return (
            <div className="movieDetails">
            </div>
        )
    }
}

export default withRouter(MovieDetails)