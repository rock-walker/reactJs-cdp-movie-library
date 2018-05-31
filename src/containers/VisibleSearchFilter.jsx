import { connect } from 'react-redux'
import { setSearchFilter } from '../actions'
import SearchFilter from '../searchFilter/SearchFilter'

const mapDispatchToProps = dispatch => {
    return {
        onFilterClick: (filter) => {
            dispatch(setSearchFilter(filter))
        }
    }
}

const VisibleSearchFilter = connect(null, mapDispatchToProps) (SearchFilter)

export default VisibleSearchFilter