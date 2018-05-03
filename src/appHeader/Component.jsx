import React, {Component} from 'react';
import '../app/Component.css';
import backgroundImg from '../assets/header.jpg';
import SearchBar from '../searchBar/Component';
import SearchFilter from '../searchFilter/Component';
import MovieDetails from '../movieDetails/Component';

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