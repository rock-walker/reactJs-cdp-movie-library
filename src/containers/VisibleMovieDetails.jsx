import { connect } from 'react-redux'
import { fetchMovieDetails } from '../actions'
import MovieDetails from '../movieDetails/MovieDetails'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    let appState = state.appReducers
    return {
        movie: appState.movieDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMovieDetails: (id) => {
            dispatch(fetchMovieDetails(id))
        }
    }
}

const VisibleMovieDetails = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails))

export default VisibleMovieDetails