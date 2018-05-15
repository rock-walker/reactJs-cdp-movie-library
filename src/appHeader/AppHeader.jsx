import React, {Component} from 'react';
import '../app/app.css';
import backgroundImg from '../assets/header.jpg';
import SearchBar from '../searchBar/SearchBar';
import SearchFilter from '../searchFilter/SearchFilter';
import MovieDetails from '../movieDetails/MovieDetails';

class AppHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isList: true
        }
    }

    render() {
        const isList = this.state.isList;
        return React.createElement(
            'header', { className: 'App-header',
                        style: {backgroundImage: "url(" + backgroundImg + ")"}
                      },
            
                React.createElement(
                    'h3', { className: 'App-logo', alt: 'logo' },
                        'netflixroulette'
                    ),

                 isList ? ([
                    <SearchBar key="searchBar"/>,
                    <SearchFilter key="searchFilter"/>
                    ]) : ([
                    <input type="button" value="SEARCH" className="searchNavigator"/>,
                    <MovieDetails />
                 ])
        );
    }
}


export default AppHeader;