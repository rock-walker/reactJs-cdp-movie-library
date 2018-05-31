import React, {Component} from 'react'
import '../app/app.css'
import backgroundImg from '../assets/header.jpg'
import VisibleSearchBar from '../containers/VisibleSearchBar'
import VisibleSearchFilter from '../containers/VisibleSearchFilter'
import MovieDetails from '../movieDetails/MovieDetails'

class AppHeader extends React.PureComponent {
     constructor(props){
        super(props);
    }

    render() {
        const { isDetailsView, movie, onSearchClick } = this.props;
        return React.createElement(
            'header', { className: 'App-header',
                        style: {backgroundImage: "url(" + backgroundImg + ")"}
                      },
            
                React.createElement(
                    'h3', { className: 'App-logo', alt: 'logo' },
                        'netflixroulette'
                    ),

                 !isDetailsView ? ([
                    <VisibleSearchBar key="searchBar"/>,
                    <VisibleSearchFilter key="searchFilter"/>
                    ]) : ([
                    <input type="button" value="SEARCH" className="searchNavigator" onClick={() => onSearchClick(false)}/>,
                    <MovieDetails movie={ movie }/>
                 ])
        );
    }
}


export default AppHeader