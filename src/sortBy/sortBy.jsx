import React from 'react';
import '../searchFilter/searchFilter.css';

class SortBy extends React.PureComponent {
    render() {
        const { onSort } = this.props
        return (
            <div className="searchby">
                <span className="title">Sort by</span>
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