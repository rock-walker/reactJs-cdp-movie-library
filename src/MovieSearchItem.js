import React from 'react';
import './Components.css';

class MovieSearchItem extends Component {
	render() {
		return(
			<img src= {props.url} height=30 width=20 />
			<span>{props.title}</span>
			<span>{props.year}</span>
			<p>{props.genre}</p>
		);
	}	
}