import React, { Component } from 'react'
import '../app/app.css'
import { connect } from 'react-redux'
import { selectedMovies, fetchPostsIfNeeded, invalidateMovies } from '../actions'
import AppHeader from '../appHeader/AppHeader'
import StatusBar from '../statusBar/StatusBar'
import ResultBody from '../resultBody/ResultBody'
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
        const { dispatch, selectedMovies } = this.props
        dispatch(fetchPostsIfNeeded(selectedMovies))
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
        const { selectedMovies, posts, isFetching, lastUpdated } = this.props;
        const moviesCount = posts.length;
        const isEmpty = posts.length === 0;
        return (
            <div>
                <ErrorBoundary>
                    <AppHeader />
                    <StatusBar moviesCount={moviesCount} 
                                OnSortingChange={this.sortMovies}/>
                    <ResultBody movies={posts} 
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
    const { selectedMovies, postsBySearch } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySearch[selectedMovies] || {
        isFetching: true,
        items: []
    }

    return {
        selectedMovies,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)