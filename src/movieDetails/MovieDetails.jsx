import React, {Component} from 'react'
import styles from './movieDetails.css'

class MovieDetails extends Component {
    render() {
        const { isFetching, item } = this.props.movie
        return (
            <div>
            {
                isFetching ?
                    (<h2>Loading...</h2>)
                :
                <div className={styles.movieDetails}>
                    <img src={item.poster_path}/>
                    <div className={styles.movieText}>
                        <h2>{item.title}</h2>
                        <span className={styles.rate}>{item.vote_average}</span>
                        <p className={styles.awards}>{item.genres.join(' & ')}</p>
                        <p>
                            <span className={styles.releaseYear}>{new Date(item.release_date).getFullYear()}</span>
                            <span className={styles.duration}>{item.runtime} min</span>
                        </p>
                        <p>{item.overview}</p>
                    </div>    
                </div>
            }</div>
        )
    }
}

export default MovieDetails