import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import StatusBar from '../statusBar/StatusBar'

const getFirstGenre = item => {
    return (item) ? item.genres[0] : ''
}

const mapStateToProps = state => {
    return {
        isDetailsView: state.appReducers.movieDetails.isDetailsView,
        genre: getFirstGenre(state.appReducers.movieDetails.item)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchByGenre: (genre) => {
            dispatch(fetchPosts(genre))
        }
    }
}

const VisibleStatusBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusBar)

export default VisibleStatusBar