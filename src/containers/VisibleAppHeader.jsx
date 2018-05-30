import { connect } from 'react-redux'
import { switchHeaderView } from '../actions'
import AppHeader from '../appHeader/AppHeader'

const mapStateToProps = state => {
    return {
        isDetailsView: state.movieDetails.isDetailsView,
        movie: state.movieDetails.item
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchClick: (isDetails) => {
            dispatch(switchHeaderView(isDetails))
        }
    }
}

const VisibleAppHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader)

export default VisibleAppHeader