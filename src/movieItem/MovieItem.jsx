import React, {Component} from 'react';
import '../movieItem/movieItem.css';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.navToDetails = this.navToDetails.bind(this);
    }

    navToDetails(event) {
        
    }

    concatenateGenres(genres){
        if (genres.length == 1) {
            return genres;
        }

        return genres.join(' & ');
    }

    render() {
        return(
            <div className="movieItem" onClick={this.navToDetails}>
                <img src={this.props.cover}/>
                <div className="movieDescription">
                    <span className="title">{this.props.title}</span>
                    <div className="year">{new Date(this.props.date).getFullYear()}</div>
                    <p>{this.concatenateGenres(this.props.genres)}</p>
                </div>
            </div>
        );
    }
}

export default MovieItem;