import React, {Component} from 'react';
import './Components.css';
import ResultCount from './ResultCount';
import SortBy from './SortBy';

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