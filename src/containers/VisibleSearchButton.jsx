import { connect } from 'react-redux'
import { fetchPostsIfNeeded,
         setSearchFilter,
         setSearchText
        } from '../actions'
import SearchButton from '../searchButton/SearchButton'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
    return {
        query: state.appReducers.searchOptions.searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: () => {
            dispatch(fetchPostsIfNeeded())
        },
        setFilter: (filter) => {
            dispatch(setSearchFilter(filter))
        }
    }
}

const VisibleSearchButton = withRouter(connect(mapStateToProps, mapDispatchToProps) (SearchButton))

export default VisibleSearchButton