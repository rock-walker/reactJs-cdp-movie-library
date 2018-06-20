import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import styles from '../app/app.css'
import backgroundImg from '../assets/header.jpg'
import VisibleSearchBar from '../containers/VisibleSearchBar'
import VisibleSearchFilter from '../containers/VisibleSearchFilter'
import VisibleMovieDetails from '../containers/VisibleMovieDetails'

class AppHeader extends Component {
    render() {
        const {onBackToSearch} = this.props
        const headerStyle = {
                backgroundImage: 'url(' + backgroundImg + ')'
        }

        return (
            <header className={styles.AppHeader} style={headerStyle}>
                <h3 className={styles.AppLogo} alt='logo'>netflixroulette</h3>
                <Switch>
                    <Route path="/film/:id" render={props =>
                        <div>
                            <input type="button" value="SEARCH" className={styles.searchNavigator} onClick={
                                () => { 
                                        props.history.push("/")
                                        onBackToSearch(false)
                                    }
                            }/>
                            <VisibleMovieDetails />
                        </div>
                    }/>
                    <Route path="*" render={() => 
                        <div>
                            <VisibleSearchBar/>
                            <VisibleSearchFilter/>
                        </div>
                    } />
                </Switch>
            </header>
        )
    }
}

export default AppHeader