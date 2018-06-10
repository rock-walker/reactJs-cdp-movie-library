import React, { Component } from 'react'
import '../app/app.css'
import { connect } from 'react-redux'
import { moviesCacheKeys, 
         fetchPostsIfNeeded, 
         invalidateMovies,
       } from '../actions'
import { Route, Switch } from 'react-router'

import VisibleAppHeader from '../containers/VisibleAppHeader'
import VisibleStatusBar from '../containers/VisibleStatusBar'
import VisibleMovies from '../containers/VisibleMovies'
import AppFooter from '../appFooter/AppFooter'
import NotFound from '../notFound/NotFound'

import ErrorBoundary from '../common/ErrorBoundary'
import { withRouter } from 'react-router-dom'

class App extends Component {
    render() {
        const { moviesCacheKeys, movies, isFetching } = this.props;
        const moviesCount = movies.length;
        const isEmpty = movies.length === 0;
        return (
            <div>
                <ErrorBoundary>
                    <VisibleAppHeader />
                    <VisibleStatusBar moviesCount={moviesCount} />
                    <Switch>  
                        <Route path="/(film|search)?" render = {() => <VisibleMovies movies={movies} 
                                isFetching={isFetching}
                                isEmpty={isEmpty}/>
                            }/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
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
        items: movies
    } = moviesBySearch[moviesCacheKeys] || {
        isFetching: false,
        items: []
    }
    const { location } = state.routerReducer
    return {
        moviesCacheKeys,
        movies,
        isFetching,
        location
    }
}

export default withRouter(connect(mapStateToProps)(App))