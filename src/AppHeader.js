import React from 'react';
import logo from './logo.svg';
import './App.css';

class AppHeader extends React.PureComponent {
	render() {
		return React.createElement(
			'header', {className: 'App-header'},
			
				React.createElement(
					'img', {src: {logo}, className: 'App-logo', alt: 'logo'},
						null
					),

				React.createElement(
					'h1', {className: 'App-title'},
					'Welcome to movie library'
					)
		);
	}
}


export default AppHeader;