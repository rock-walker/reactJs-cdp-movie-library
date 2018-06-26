import React, {Component} from 'react';
import styles from './movieItem.css';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.concatenateGenres = this.concatenateGenres.bind(this);
    }

    concatenateGenres(genres) {
        if (genres.length == 1) {
            return genres;
        }

        return genres.join(' & ')
    }

    render() {
        const { item, onClick } = this.props;

        return(
            <div className={styles.movieItem} onClick={ onClick } >
                <img src={item.poster_path}/>
                <div className={styles.movieDescription}>
                    <span className={styles.title}>{item.title}</span>
                    <div className={styles.year}>{new Date(item.release_date).getFullYear()}</div>
                    <p>{this.concatenateGenres(item.genres)}</p>
                </div>
            </div>
        )
    }
}
export default MovieItem;