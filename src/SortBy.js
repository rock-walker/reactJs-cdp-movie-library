import React from 'react';

class SortBy extends React.PureComponent {
	render() {
		return (
			<div className="searchby">
				<span className="title">Sort by</span>
				<label>
					<input type="radio" value="date" id="date" name="sorting"/>
					<label htmlFor="date">release date</label>
				</label>
				<label>
					<input type="radio" value="rate" id="rate" name="sorting"/>
					<label htmlFor="rate">rating</label>
				</label>
			</div>
		);
	}
}

export default SortBy;