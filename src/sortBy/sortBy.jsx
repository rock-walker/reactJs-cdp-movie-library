import React from 'react'
import styles from './sortBy.css'

class SortBy extends React.PureComponent {
    render() {
        const { onSort } = this.props
        return (
            <div className={styles.root}>
                <span className={styles.title}>Sort by</span>
                <label>
                    <input type="radio" value="date" id="date" name="sorting" onClick={() => onSort(true)}/>
                    <label htmlFor="date">release date</label>
                </label>
                <label>
                    <input type="radio" value="rate" id="rate" name="sorting" onClick={() => onSort(false)}/>
                    <label htmlFor="rate">rating</label>
                </label>
            </div>
        );
    }
}

export default SortBy;