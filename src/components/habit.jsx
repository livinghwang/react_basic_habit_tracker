import React, { PureComponent } from 'react';

class Habit extends PureComponent {
	componentDidMount() {
		console.log(`habit: ${this.props.habit.name} mounted`);
	}

	componentWillUnmount() {
		console.log(`habit: ${this.props.habit.name} will uncmount`);
	}
	handleIncrement = () => {
		// state 오브젝트 안에 있는 count를 증가시킨 뒤 업데이트 해야함.
		// 부분적 데이터 업데이트가 되지 않도록 유의할 것
		// this.setState({ count: this.state.count + 1 });
		this.props.onIncrement(this.props.habit);
	};

	handleDecrement = () => {
		// const count = this.state.count - 1;
		// this.setState({ count: count < 0 ? 0 : count });
		this.props.onDecrement(this.props.habit);
	};

	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};

	render() {
		// console.log(this.props.habit);
		const { name, count } = this.props.habit;
		return (
			<li className="habit">
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>

				<button className="habit-button habit-increase" onClick={this.handleIncrement}>
					<i className="fas fa-plus-square" />
				</button>

				<button className="habit-button habit-decrease" onClick={this.handleDecrement}>
					<i className="fas fa-minus-square" />
				</button>
				<button className="habit-button habit-delete" onClick={this.handleDelete}>
					{/* 불필요하게 Arrow Function이 만들어질 경우가 있기 때문에, 클래스 안에서 멤버변수를 만드는게 나을 수 있음 */}
					{/* <button className="habit-button habit-delete" onClick={() => this.props.onDelete(this.props.habit)}> */}
					<i className="fas fa-trash" />
				</button>
			</li>
		);
	}
}

export default Habit;
