import React from 'react';

class SortBy extends React.PureComponent {
	render() {
		return (
			<div>
				<p>Sort by</p>
				<input type="radio" value="date" id="date" name="sorting"/>
				<label htmlFor="date">release date</label>

				<input type="radio" value="rate" id="rate" name="sorting"/>
				<label htmlFor="rate">rating</label>
			</div>
		);
	}
}

export default SortBy;