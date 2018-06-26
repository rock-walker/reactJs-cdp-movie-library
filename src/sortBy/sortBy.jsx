import React from 'react'
import { sortMovies } from '../actions'
import styles from './sortBy.css'

class SortBy extends React.PureComponent {
    render() {
        return (
            <div className={styles.root}>
                <span className={styles.title}>Sort by</span>
                <label>
                    <input type="radio" value="date" id="date" name="sorting" onClick={() => sortMovies(true)}/>
                    <label htmlFor="date">release date</label>
                </label>
                <label>
                    <input type="radio" value="rate" id="rate" name="sorting" onClick={() => sortMovies(false)}/>
                    <label htmlFor="rate">rating</label>
                </label>
            </div>
        );
    }
}

export default SortBy;