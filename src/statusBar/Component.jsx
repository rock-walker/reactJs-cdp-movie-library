import React, {Component} from 'react';
import '../statusBar/Component.css';
import ResultCount from '../resultCount/Component';
import SortBy from '../sortBy/Component';

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