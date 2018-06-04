import React, {Component} from 'react';
import '../resultBody/resultBody.css';
import MovieItem from '../movieItem/MovieItem';
import { ConnectedRouter } from 'react-router-dom'
import { Route } from 'react-router'

class ResultBody extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {isFetching, isEmpty, movies, onMovieClick} = this.props;
        return(
            <Route>
            <div>
                {
                    isEmpty
                        ? (isFetching 
                            ? <h2>Loading...</h2> 
                            : <div className="emptyResults"><h1>No films found.</h1></div>)
                        :   <div className="resultBody">
                            {
                                movies.map((item) =>
                                    <Route path="/film/{item.id}" component = {
                                        <MovieItem key={item.title} item={item} onClick={() => onMovieClick(item.id)}/>
                                    } />
                                )
                            }
                            </div>
                }
            </div>
            </Route>
        );
    }
}

export default ResultBody;