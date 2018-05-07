import React, {Component} from 'react';
import '../searchFilter/searchFilter.css';
import SearchButton from '../searchButton/SearchButton';

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchByTitle: true
        };

        this.toggleSearchFilter = this.toggleSearchFilter.bind(this);
    }

    toggleSearchFilter(event) {
        this.setState(prevState => ({
            searchByTitle: !prevState.searchByTitle
        }));
    }

    render() {
        return React.createElement(
            'div', {className: 'searchby'},

                React.createElement(
                    'span', {className: 'title'}, 'search by'
                ),
                
                React.createElement(
                    'label', {className: 'sTitle'},
                    React.createElement(
                        'input', {type: 'radio', name: 'toggle', onClick: this.toggleSearchFilter },
                    ),
                    React.createElement(
                        'span', null, 'title'
                    )
                ),

                React.createElement(
                    'label', {className: 'sGenre'},
                    React.createElement(
                        'input', {type: 'radio', name: 'toggle', onClick: this.toggleSearchFilter },
                    ),
                    React.createElement(
                        'span', null, 'genre'
                    )
                ),

                <SearchButton />
        )
    }
}

export default SearchFilter;