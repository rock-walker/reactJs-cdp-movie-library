import React, {Component} from 'react';
import './Components.css';

class SearchBar extends Component {
	render() {
		return (
            <div>
                <h1 className="App-title">Find your movie</h1>
                <input type="text" className="searchBar"/>
            </div>
        );
    }
}

export default SearchBar;