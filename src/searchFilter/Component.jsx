import React, {Component} from 'react';
import '../searchFilter/Component.css';
import SearchButton from '../searchButton/Component';

class SearchFilter extends React.Component {
    render() {
        return React.createElement(
            'div', {className: 'searchby'},

                React.createElement(
                    'span', {className: 'title'}, 'search by'
                ),
                
                React.createElement(
                    'label', {className: 'sTitle'},
                    React.createElement(
                        'input', {type: 'radio', name: 'toggle'},
                    ),
                    React.createElement(
                        'span', null, 'title'
                    )
                ),

                React.createElement(
                    'label', {className: 'sGenre'},
                    React.createElement(
                    	'input', {type: 'radio', name: 'toggle'},
                    ),
                    React.createElement(
                        'span', null, 'genre'
                    )
                ),

                <SearchButton/>
        )
    }
}

export default SearchFilter;