import React, {Component} from 'react';
import '../app/app.css';
import backgroundImg from '../assets/header.jpg';
import SearchBar from '../searchBar/SearchBar';
import SearchFilter from '../searchFilter/SearchFilter';
import MovieDetails from '../movieDetails/MovieDetails';

class Header extends React.PureComponent {
    render() {
        return React.createElement(
            'header', { className: 'App-header',
                        style: {backgroundImage: "url(" + backgroundImg + ")"}
                      },
            
                React.createElement(
                    'h3', { className: 'App-logo', alt: 'logo' },
                        'netflixroulette'
                    ),
                //view for the second screen
                //<input type="button" value="SEARCH" className="searchNavigator"/>,
                //<MovieDetails />

                //view for the first screen
                <SearchBar/>,
                <SearchFilter/>
        );
    }
}


export default Header;