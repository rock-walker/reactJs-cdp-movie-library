import { connect } from 'react-redux'
import { setSearchText } from '../actions'
import SearchBar from '../searchBar/SearchBar'

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (text) => {
            dispatch(setSearchText(text))
        }
    }
}

const VisibleSearchBar = connect(null, mapDispatchToProps) (SearchBar)

export default VisibleSearchBar