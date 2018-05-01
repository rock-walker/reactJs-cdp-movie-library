import React, {Component} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';

class Header extends React.PureComponent {
    render() {
        return React.createElement(
            'header', {className: 'App-header'},
            
                React.createElement(
                    'h3', {className: 'App-logo', alt: 'logo'},
                        'netflixroulette'
                    ),

                React.createElement(
                    'h1', {className: 'App-title'},
                    'Find your movie'
                    ),
                <SearchBar/>,
                <SearchFilter/>
        );
    }
}


export default Header;