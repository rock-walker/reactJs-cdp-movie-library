import { connect } from 'react-redux'
import { sortMovies } from '../actions'
import SortBy from '../sortBy/SortBy'

const mapDispatchToProps = dispatch => {
    return {
        onSort: (byDate) => {
            dispatch(sortMovies(byDate))
        }
    }
}

const VisibleSortBy = connect(null, mapDispatchToProps) (SortBy)

export default VisibleSortBy