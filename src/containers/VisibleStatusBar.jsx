import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import StatusBar from '../statusBar/StatusBar'
import {withRouter} from 'react-router-dom'

const getFirstGenre = item => {
    return (item) ? item.genres[0] : ''
}

const mapStateToProps = state => {
    return {
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

const VisibleStatusBar = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusBar))

export default VisibleStatusBar