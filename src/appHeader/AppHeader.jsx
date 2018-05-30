import React, {Component} from 'react';
import '../app/app.css';
import backgroundImg from '../assets/header.jpg';
import SearchBar from '../searchBar/SearchBar';
import SearchFilter from '../searchFilter/SearchFilter';
import MovieDetails from '../movieDetails/MovieDetails';

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
                    <SearchBar key="searchBar"/>,
                    <SearchFilter key="searchFilter"/>
                    ]) : ([
                    <input type="button" value="SEARCH" className="searchNavigator" onClick={() => onSearchClick(false)}/>,
                    <MovieDetails movie={ movie }/>
                 ])
        );
    }
}


export default AppHeader;