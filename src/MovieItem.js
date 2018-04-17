import React from 'react';
import './Components.css';

class MovieItem extends Component {
	render() {
		return(
			<img src={props.coverSrc} />
			<span>{props.title}</span>
			<span>{props.rate}</span>
			<span>{props.duration}</span>
			<p>{props.description}</p>
		);
	}
}