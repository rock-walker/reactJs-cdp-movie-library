import React, {Component} from 'react';
import '../searchButton/searchButton.css';

class SearchButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.searchMovie = this.searchMovie.bind(this);
    }

    searchMovie() {
        alert('search');
    }

	render() {
		return (
            <div>
			    <input type="button" value="SEARCH" className="searchButton" onClick={this.searchMovie}/>
            </div>
		);
	}
}

export default SearchButton; 