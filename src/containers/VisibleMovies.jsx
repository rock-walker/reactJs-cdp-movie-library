import { connect } from 'react-redux'
import { fetchMovieDetails } from '../actions'
import ResultBody from '../resultBody/ResultBody'

const mapStateToProps = (state, ownProps) => {
    let foundMovies = state.moviesBySearch[state.moviesCacheKeys]
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

const VisibleMovies = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultBody)

export default VisibleMovies