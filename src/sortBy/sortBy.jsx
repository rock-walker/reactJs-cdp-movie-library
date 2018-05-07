import React from 'react';
import '../searchFilter/searchFilter.css';

class SortBy extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            sortByDate: true
        };

        this.toggleSortHandler = this.toggleSortHandler.bind(this);
    }

    toggleSortHandler(event) {
        this.setState(prevState => ({
            sortByDate: !prevState.sortByDate
        }));
        
        this.props.OnSortingChange(this.state.sortByDate);
    }

    render() {
        return (
            <div className="searchby">
                <span className="title">Sort by</span>
                <label>
                    <input type="radio" value="date" id="date" name="sorting" onClick={this.toggleSortHandler}/>
                    <label htmlFor="date">release date</label>
                </label>
                <label>
                    <input type="radio" value="rate" id="rate" name="sorting" onClick={this.toggleSortHandler}/>
                    <label htmlFor="rate">rating</label>
                </label>
            </div>
        );
    }
}

export default SortBy;