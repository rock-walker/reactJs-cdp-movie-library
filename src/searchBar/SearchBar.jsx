import React, {Component} from 'react'
import '../searchBar/searchBar.css'

class SearchBar extends Component {
	render() {
        const { onSearchChange, match } = this.props
        let fullQuery = match.params[0]
        let query = ''
        if (fullQuery) {
            let queryMatch = fullQuery.match('\/search\/(.+)')
            if (queryMatch && queryMatch.length == 2){
                query = queryMatch[1]
                onSearchChange(query)
            }
        }
		return (
            <div>
                <h1 className="App-title">Find your movie</h1>
                <input type="text" defaultValue={query}
                    onChange={(event) => onSearchChange(event.target.value)} 
                    className="searchBar"/>
            </div>
        );
    }
}

export default SearchBar;