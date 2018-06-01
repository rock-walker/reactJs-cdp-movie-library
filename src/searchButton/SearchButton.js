import React, {Component} from 'react'
import '../searchButton/searchButton.css'

class SearchButton extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { onSearch } = this.props
        return ( 
            <div>
               <input type="button" value="SEARCH" className="searchButton" onClick={() => onSearch()}/>
            </div>
        );
    }
}

export default SearchButton; 