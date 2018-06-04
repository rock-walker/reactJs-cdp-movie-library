import React, { Component } from 'react'
import '../app/app.css'
import { connect } from 'react-redux'
import { moviesCacheKeys, 
         fetchPostsIfNeeded, 
         invalidateMovies,
       } from '../actions'
import { withRouter } from 'react-router-dom'

import VisibleAppHeader from '../containers/VisibleAppHeader'
import VisibleStatusBar from '../containers/VisibleStatusBar'
import VisibleMovies from '../containers/VisibleMovies'
import AppFooter from '../appFooter/AppFooter'
import ErrorBoundary from '../common/ErrorBoundary'

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchPostsIfNeeded())
    }

    render() {
        const { moviesCacheKeys, movies, isFetching, lastUpdated } = this.props;
        const moviesCount = movies.length;
        const isEmpty = movies.length === 0;
        return (
            <div>
                <ErrorBoundary>
                    <VisibleAppHeader />
                    <VisibleStatusBar moviesCount={moviesCount} />
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
    const { moviesCacheKeys, moviesBySearch } = state.appReducers
    const {
        isFetching,
        lastUpdated,
        items: movies
    } = moviesBySearch[moviesCacheKeys] || {
        isFetching: true,
        items: []
    }
    const { location } = state.routerReducer
    return {
        moviesCacheKeys,
        movies,
        isFetching,
        lastUpdated,
        location
    }
}

export default connect(mapStateToProps)(App)