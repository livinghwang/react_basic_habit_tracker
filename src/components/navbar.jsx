import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<i className="navbar-logo fas fa-leaf" />
				<span>Habit Tracker</span>
				<span className="navbar-count">{this.props.totalCount}</span>
			</div>
		);
	}
}

export default Navbar;
