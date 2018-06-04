import React, {Component} from 'react';
import '../resultBody/resultBody.css';
import MovieItem from '../movieItem/MovieItem';
import { Browser as Router, Route } from 'react-router-dom'

class ResultBody extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {isFetching, isEmpty, movies, onMovieClick} = this.props;
        return(
            <Router>
            <div>
                {
                    isEmpty
                        ? (isFetching 
                            ? <h2>Loading...</h2> 
                            : <div className="emptyResults"><h1>No films found.</h1></div>)
                        :   <div className="resultBody">
                            {
                                movies.map((item) =>
                                    <Rout path="/film/:id" component = {
                                        <MovieItem key={item.title} item={item} onClick={() => onMovieClick(item.id)}/>
                                    } />
                                )
                            }
                            </div>
                }
            </div>
            </Router>
        );
    }
}

export default ResultBody;