import React, {Component} from 'react';
import './Components.css';
import MovieItem from './MovieItem';

class ResultBody extends Component {
    render() {
        return(
            <div className="resultBody">
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
        );
    }
}

export default ResultBody;