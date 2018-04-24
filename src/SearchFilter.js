import React, {Component} from 'react';
import './Components.css';

class SearchFilter extends React.Component {
	render() {
		return React.createElement(
					'div', {id: 'searchby'},

					React.createElement(
						'span', {id: 'title'}, 'search by'
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
						)
					)
	}
}

export default SearchFilter;