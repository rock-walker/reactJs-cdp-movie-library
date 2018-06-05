import React, {Component} from 'react';
import '../searchBar/searchBar.css';

class SearchBar extends Component {
	render() {
        const { onSearchChange } = this.props
		return (
            <div>
                <h1 className="App-title">Find your movie</h1>
                <input type="text" 
                    onChange={(event) => onSearchChange(event.target.value)} 
                    className="searchBar"/>
            </div>
        );
    }
}

export default SearchBar;