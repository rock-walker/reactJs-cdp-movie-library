import React, {Component} from 'react';
import '../movieItem/movieItem.css';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../actions'

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

    navToDetails(id){
        const { dispatch } = this.props
        let movie = dispatch(fetchMovieDetails(id))
        movie = null;
    }

    render() {
        const { item, navToDetails } = this.props;

        return(
            <div className="movieItem" onClick={() => this.navToDetails(item.id)}>
                <img src={item.poster_path}/>
                <div className="movieDescription">
                    <span className="title">{item.title}</span>
                    <div className="year">{new Date(item.release_date).getFullYear()}</div>
                    <p>{this.concatenateGenres(item.genres)}</p>
                </div>
            </div>
        )
    }
}
export default MovieItem;