import { connect } from 'react-redux'

import SortBy from '../sortBy/SortBy'

//this is temporarily filter, futher need to attach previous sorting state
//to recover it on UI
const mapStateToProps = (state) => {
    return {
        currentSort: state.appReducers.searchOptions.filter
    }
}

const VisibleSortBy = connect(mapStateToProps) (SortBy)

export default VisibleSortBy