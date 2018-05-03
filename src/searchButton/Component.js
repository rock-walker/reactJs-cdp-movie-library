import React, {Component} from 'react';
import '../searchButton/Component.css';

class SearchButton extends React.PureComponent {
	render() {
		return (
            <div>
			    <input type="button" value="SEARCH" className="searchButton"/>
            </div>
		);
	}
}

export default SearchButton; 