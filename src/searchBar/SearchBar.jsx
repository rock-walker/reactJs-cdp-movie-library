import React, {Component} from 'react';
import '../searchBar/searchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {searchText: ''};
        this.handleSearchText = this.handleSearchText.bind(this);
    }

    handleSearchText (event) {
        this.setState({
            searchText: event.target.value
        });
    }

	render() {
		return (
            <div>
                <h1 className="App-title">Find your movie</h1>
                <input type="text" value={this.state.searchText} onChange={this.handleSearchText} className="searchBar"/>
            </div>
        );
    }
}

export default SearchBar;