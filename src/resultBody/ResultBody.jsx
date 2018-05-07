import React, {Component} from 'react';
import '../resultBody/resultBody.css';
import MovieItem from '../movieItem/MovieItem';

class ResultBody extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="resultBody">
               {
                this.props.movies.map((item) =>
                    <MovieItem title={item.title} 
                        date={item.release_date}
                        genres={item.genres}
                        item={item} />
                    )
               }
            </div>
        );
    }
}

export default ResultBody;