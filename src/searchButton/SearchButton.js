import React from 'react'
import { fetchPostsIfNeeded,
         setSearchFilter
        } from '../actions'

import { call, put } from 'redux-saga/effects'
import styles from './searchButton.css'

class SearchButton extends React.PureComponent {
    componentWillMount(nextProps) {
        const {match} = this.props
        let fullQuery = match.params[0]
        if (fullQuery && fullQuery.match('\/search\/(.+)')) {
            setSearchFilter('title')
            fetchPostsIfNeeded()
        }
    }
    render() {
        const { query, history, match } = this.props
        return ( 
            <div>
               <input type="button" value="SEARCH" className={styles.searchButton} onClick={ () => {
                    history.push("/search/" + query)
                    fetchPostsIfNeeded()
                }}/>
            </div>
        );
    }
}

export default SearchButton; 