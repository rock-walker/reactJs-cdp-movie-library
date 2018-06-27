import { connect } from 'react-redux'
import SearchButton from '../searchButton/SearchButton'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
    return {
        query: state.appReducers.searchOptions.searchText
    }
}

const VisibleSearchButton = withRouter(connect(mapStateToProps) (SearchButton))

export default VisibleSearchButton