import React, { Component } from 'react';
import '../app/app.css';
import AppHeader from '../appHeader/AppHeader';
import StatusBar from '../statusBar/StatusBar';
import ResultBody from '../resultBody/ResultBody';
import AppFooter from '../appFooter/AppFooter';
import ErrorBoundary from '../common/ErrorBoundary';

class App extends Component {
    constructor(props) {
        super(props);
        this.sortMovies = this.sortMovies.bind(this);
        this.state = {
            sortByDate: true,
            filterByGenre: true,
            movies: [
                {
                    id: 0,
                    title: "Kill bill v.1",
                    tagline: "string",
                    vote_average: 7.7,
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
                    vote_average: 6.7,
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
                    vote_average: 9.1,
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
                    vote_average: 5.6,
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
        }      
    }

    sortMovies(sortByDate) {
        if (sortByDate) {
            this.state.movies.sort((a, b) => a.release_date < b.release_date);
        }
        else {
            this.state.movies.sort((a, b) => a.vote_average < b.vote_average);
        }
        
        this.forceUpdate();
    }

    render() {
        const moviesCount = this.state.movies.length;
        return (
            <div>
                <ErrorBoundary>
                    <AppHeader />
                    <StatusBar moviesCount={moviesCount} OnSortingChange={this.sortMovies}/>
                    <ResultBody movies={this.state.movies}/>
                    <AppFooter />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;