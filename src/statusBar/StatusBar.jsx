import React, {Component} from 'react';
import '../statusBar/statusBar.css';
import ResultCount from '../resultCount/ResultCount';
import SortBy from '../sortBy/SortBy';

class StatusBar extends Component {
    render() {
        return (
            <div className="statusBar">
                <ResultCount value="7" />
                <SortBy />
            </div>
        )
    }
}

export default StatusBar;