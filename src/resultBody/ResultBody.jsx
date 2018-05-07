import React, {Component} from 'react';
import '../resultBody/resultBody.css';
import MovieItem from '../movieItem/MovieItem';

class ResultBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Kill bill v.1",
                    tagline: "string",
                    vote_average: 0,
                    vote_count: 0,
                    release_date: "2004",
                    poster_path: "string",
                    overview: "string",
                    budget: 0,
                    revenue: 0,
                    runtime: 0,
                    genres: [
                        "Action",
                        "Adventure"
                    ]
                },
                {
                    id: 0,
                    title: "Kill bill v.2",
                    tagline: "string",
                    vote_average: 0,
                    vote_count: 0,
                    release_date: "2003",
                    poster_path: "string",
                    overview: "string",
                    budget: 0,
                    revenue: 0,
                    runtime: 0,
                    genres: [
                        "Action",
                        "Adventure"
                    ]
                },
                {
                    id: 0,
                    title: "Pulp fiction",
                    tagline: "string",
                    vote_average: 0,
                    vote_count: 0,
                    release_date: "1994",
                    poster_path: "string",
                    overview: "string",
                    budget: 0,
                    revenue: 0,
                    runtime: 0,
                    genres: [
                        "Oscar-winning movies"
                    ]
                },
                {
                    id: 0,
                    title: "Jackie Brown",
                    tagline: "string",
                    vote_average: 0,
                    vote_count: 0,
                    release_date: "1997",
                    poster_path: "string",
                    overview: "string",
                    budget: 0,
                    revenue: 0,
                    runtime: 0,
                    genres: [
                        "Dramas"
                    ]
                }
            ]
        };
    }
    render() {
        return(
            <div className="resultBody">
               {
                this.state.items.map((item) =>
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