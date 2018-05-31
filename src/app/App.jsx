import React, { Component } from 'react'
import '../app/app.css'
import { connect } from 'react-redux'
import { selectedMovies, 
         fetchPostsIfNeeded, 
         invalidateMovies,
       } from '../actions'

import VisibleAppHeader from '../containers/VisibleAppHeader'
import VisibleStatusBar from '../containers/VisibleStatusBar'
import VisibleMovies from '../containers/VisibleMovies'
import AppFooter from '../appFooter/AppFooter'
import ErrorBoundary from '../common/ErrorBoundary'

class App extends Component {
    constructor(props) {
        super(props);
        this.sortMovies = this.sortMovies.bind(this);
        this.state = {
            sortByDate: true,
            filterByGenre: true
        }
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchPostsIfNeeded())
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
        const { selectedMovies, movies, isFetching, lastUpdated } = this.props;
        const moviesCount = movies.length;
        const isEmpty = movies.length === 0;
        return (
            <div>
                <ErrorBoundary>
                    <VisibleAppHeader />
                    <VisibleStatusBar moviesCount={moviesCount} 
                                OnSortingChange={this.sortMovies}/>
                    <VisibleMovies movies={movies} 
                                lastUpdated={lastUpdated} 
                                isFetching={isFetching}
                                isEmpty={isEmpty}/>
                    <AppFooter />
                </ErrorBoundary>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { selectedMovies, moviesBySearch } = state
    const {
        isFetching,
        lastUpdated,
        items: movies
    } = moviesBySearch[selectedMovies] || {
        isFetching: true,
        items: []
    }

    return {
        selectedMovies,
        movies,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)