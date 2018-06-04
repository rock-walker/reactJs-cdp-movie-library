import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { switchHeaderView } from '../actions'
import AppHeader from '../appHeader/AppHeader'

const mapStateToProps = state => {
    return {
        isDetailsView: state.appReducers.movieDetails.isDetailsView,
        movie: state.appReducers.movieDetails.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchClick: (isDetails) => {
            dispatch(switchHeaderView(isDetails))
        }
    }
}

const VisibleAppHeader = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader))

export default VisibleAppHeader