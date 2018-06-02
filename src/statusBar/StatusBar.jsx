import React, {Component} from 'react'
import '../statusBar/statusBar.css'
import ResultCount from '../resultCount/ResultCount'
import VisibleSortBy from '../containers/VisibleSortBy'

class StatusBar extends Component {
    constructor(props){
        super(props);
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
                            <VisibleSortBy/>
                        </div>
                    )
                    : <span>Films by {genre} genre</span>
            }
            </div>
        )
    }
}

export default StatusBar;