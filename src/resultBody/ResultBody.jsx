import React, {Component} from 'react';
import '../resultBody/resultBody.css';
import MovieItem from '../movieItem/MovieItem';

class ResultBody extends Component {
    constructor(props, actions){
        super(props);
    }

    render() {
        const {lastUpdated, isFetching, isEmpty, movies} = this.props;
        return(<div>
            {isEmpty
                ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                : <div className="resultBody">
                    {
                        movies.map((item) =>
                            <MovieItem key={item.title} item={item}/>
                        )
                    }
                </div>
            }
            <p>
                    {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
                        </span>
                    }
                    {!isFetching &&
                        <button onClick={this.handleRefreshClick}>
                            Refresh
                        </button>
                    }
            </p></div>
        );
    }
}

export default ResultBody;