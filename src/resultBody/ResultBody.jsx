import React, {Component} from 'react';
import '../resultBody/resultBody.css';
import MovieItem from '../movieItem/MovieItem';

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