import React, {Component} from 'react';
import '../resultBody/Component.css';
import MovieItem from '../movieItem/Component';

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