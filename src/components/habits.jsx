import React, { Component } from 'react';
import Habit from './habit';
import HabbitAddForm from './habitAddForm';

class Habits extends Component {
	handleAdd = (name) => {
		this.props.onAdd(name);
	};

	render() {
		// console.log('habits');
		return (
			<div className="haibts">
				<HabbitAddForm onAdd={this.handleAdd} />
				<ul>
					{this.props.habits.map((item) => (
						<Habit
							key={item.id}
							habit={item}
							onIncrement={this.props.onIncrement}
							onDecrement={this.props.onDecrement}
							onDelete={this.props.onDelete}
						/>
					))}
				</ul>
				<button className="habits-reset" onClick={this.props.onReset}>
					Reset All
				</button>
			</div>
		);
	}
}

export default Habits;
