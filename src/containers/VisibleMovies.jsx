import { connect } from 'react-redux'
import { fetchMovieDetails } from '../actions'
import ResultBody from '../resultBody/ResultBody'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    let appState = state.appReducers
    let foundMovies = appState.moviesBySearch[appState.moviesCacheKeys]
    return {
        movies: foundMovies ? foundMovies.items : []
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMovieClick: (id) => {
            dispatch(fetchMovieDetails(id))
        }
    }
}

const VisibleMovies = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultBody))

export default VisibleMovies