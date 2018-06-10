import React from 'react'
import '../searchButton/searchButton.css'

class SearchButton extends React.PureComponent {
    componentWillMount(nextProps) {
        const {match, setFilter, onSearch} = this.props
        let fullQuery = match.params[0]
        if (fullQuery && fullQuery.match('\/search\/(.+)')) {
            setFilter('title')
            onSearch()
        }
    }
    render() {
        const { onSearch, query, history, match } = this.props
        return ( 
            <div>
               <input type="button" value="SEARCH" className="searchButton" onClick={ () => {
                    history.push("/search/" + query)
                    onSearch()
                }}/>
            </div>
        );
    }
}

export default SearchButton; 