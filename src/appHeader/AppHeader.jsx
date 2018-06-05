import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import '../app/app.css'
import backgroundImg from '../assets/header.jpg'
import VisibleSearchBar from '../containers/VisibleSearchBar'
import VisibleSearchFilter from '../containers/VisibleSearchFilter'
import MovieDetails from '../movieDetails/MovieDetails'

class AppHeader extends Component {
    render() {
        const headerStyle = {
                backgroundImage: 'url(' + backgroundImg + ')'
            }
        return (
            <header className='App-header' style={headerStyle}>
                <h3 className='App-logo' alt='logo'>netflixroulette</h3>
                <Switch>
                    <Route exact path="/" render={() => 
                        <div>
                            <VisibleSearchBar/>
                            <VisibleSearchFilter/>
                        </div>
                    } />
                    <Route path="/film/:id" render={props =>
                        <div>
                            <input type="button" value="SEARCH" className="searchNavigator" onClick={() => props.history.push("/")}/>
                            <MovieDetails />
                        </div>
                    }/>
                </Switch>
            </header>
        )
    }
}

export default AppHeader