import { connect } from 'react-redux'
import { fetchMovieDetails } from '../actions'
import ResultBody from '../resultBody/ResultBody'

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch(fetchMovieDetails(ownProps.id))
})

export default connect (mapDispatchToProps)(ResultBody)