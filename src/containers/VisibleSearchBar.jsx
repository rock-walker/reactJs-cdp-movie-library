import { connect } from 'react-redux'
import { setSearchText } from '../actions'
import { withRouter } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (text) => {
            dispatch(setSearchText(text))
        }
    }
}

const VisibleSearchBar = withRouter(connect(null, mapDispatchToProps) (SearchBar))

export default VisibleSearchBar