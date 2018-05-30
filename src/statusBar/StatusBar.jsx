import React, {Component} from 'react'
import '../statusBar/statusBar.css'
import ResultCount from '../resultCount/ResultCount'
import SortBy from '../sortBy/SortBy'

class StatusBar extends Component {
    constructor(props){
        super(props);
        this.handleSorting = this.handleSorting.bind(this);
    }

    handleSorting(sortByDate) {
        this.props.OnSortingChange(sortByDate);
    }

    render() {
        const { isDetailsView, genre } = this.props
        return (
            <div className="statusBar">
            {
                !isDetailsView 
                    ? (
                        <div>
                            <ResultCount value={this.props.moviesCount} />
                            <SortBy OnSortingChange={this.handleSorting} />
                        </div>
                    )
                    : <span>Films by {genre} genre</span>
            }
            </div>
        )
    }
}

export default StatusBar;