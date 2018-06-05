import React, {Component} from 'react'
import '../movieDetails/movieDetails.css'

class MovieDetails extends Component {
    render() {
        const { isFetching, item } = this.props.movie
        return (
            <div>
            {
                isFetching ?
                    (<h2>Loading...</h2>)
                :
                <div className="movieDetails">
                    <img src={item.poster_path}/>
                    <div className="movieText">
                        <h2>{item.title}</h2>
                        <span className="rate">{item.vote_average}</span>
                        <p className="awards">{item.genres.join(' & ')}</p>
                        <p>
                            <span className="releaseYear">{new Date(item.release_date).getFullYear()}</span>
                            <span className="duration">{item.runtime} min</span>
                        </p>
                        <p>{item.overview}</p>
                    </div>    
                </div>
            }</div>
        )
    }
}

export default MovieDetails