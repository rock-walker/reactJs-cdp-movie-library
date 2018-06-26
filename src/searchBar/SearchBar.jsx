import React, {Component} from 'react'
import styles from './searchBar.css'
import rootStyles from '../app/app.css'

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
                <h1 className={rootStyles.title}>Find your movie</h1>
                <input type="text" defaultValue={query}
                    onChange={(event) => onSearchChange(event.target.value)} 
                    className={styles.searchBar}/>
            </div>
        );
    }
}

export default SearchBar;