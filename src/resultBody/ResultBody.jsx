import React, {Component} from 'react';
import '../resultBody/resultBody.css';
import MovieItem from '../movieItem/MovieItem';

class ResultBody extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {lastUpdated, isFetching, isEmpty, movies, onMovieClick} = this.props;
        return(
            <div>
                {
                    isEmpty
                        ? (isFetching 
                            ? <h2>Loading...</h2> 
                            : <div className="emptyResults"><h1>No films found.</h1></div>)
                        :   <div className="resultBody">
                            {
                                movies.map((item) =>
                                    <MovieItem key={item.title} item={item} onClick={() => onMovieClick(item.id)}/>
                                )
                            }
                            </div>
                }
            </div>
        );
    }
}

export default ResultBody;