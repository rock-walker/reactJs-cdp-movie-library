import React, {Component} from 'react'
import styles from './statusBar.css'
import {Switch, Route} from 'react-router'
import ResultCount from '../resultCount/ResultCount'
import VisibleSortBy from '../containers/VisibleSortBy'

class StatusBar extends Component {
    render() {
        const { genre, moviesCount } = this.props
        return (
            <div className={styles.statusBar}>
                <Switch>
                    <Route path="/film/:id" render = {() => 
                        <span>Films by {genre} genre</span>
                        }/>
                    <Route path="/" render = {() =>
                        <div>
                            <ResultCount value={moviesCount} />
                            <VisibleSortBy/>
                        </div>
                        }/>
                </Switch>
            </div>
        )
    }
}

export default StatusBar;