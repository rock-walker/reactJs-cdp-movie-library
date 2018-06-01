import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions'
import SearchButton from '../searchButton/SearchButton'

const mapDispatchToProps = dispatch => {
    return {
        onSearch: () => {
            dispatch(fetchPostsIfNeeded())
        }
    }
}

const VisibleSearchButton = connect(null, mapDispatchToProps) (SearchButton)

export default VisibleSearchButton