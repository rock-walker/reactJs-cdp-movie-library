import React, {Component} from 'react'
import styles from './resultBody.css'
import MovieItem from '../movieItem/MovieItem'
import {Route} from 'react-router'

class ResultBody extends Component {
    render() {
        const {isFetching, isEmpty, movies, getMovieDetails, history} = this.props
        return(
            <div>
                {
                    isEmpty
                        ? (isFetching 
                            ? <h2>Loading...</h2> 
                            : <div className={styles.emptyResults}><h1>No films found.</h1></div>)
                        :   <div className={styles.resultBody}>
                            {
                                movies.map((item) =>
                                    <MovieItem key={item.title} item={item} onClick={() => {
                                            getMovieDetails(item.id)
                                            history.push('/film/'+item.id)
                                        }
                                    }/>
                                )
                            }
                            </div>
                }
            </div>
        );
    }
}

export default ResultBody;