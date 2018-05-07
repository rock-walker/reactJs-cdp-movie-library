import React, {Component} from 'react';
import '../statusBar/statusBar.css';
import ResultCount from '../resultCount/ResultCount';
import SortBy from '../sortBy/SortBy';

class StatusBar extends Component {
    constructor(props){
        super(props);
        this.handleSorting = this.handleSorting.bind(this);
    }

    handleSorting(sortByDate) {
        this.props.OnSortingChange(sortByDate);
    }

    render() {
        return (
            <div className="statusBar">
                <ResultCount value={this.props.moviesCount} />
                <SortBy OnSortingChange={this.handleSorting} />
            </div>
        )
    }
}

export default StatusBar;