import React, { memo } from 'react';

// 할당해서 사용할 수 있고, 순수 펑션으로 작업할 수 있음.
// 컴포넌트를 리턴하는 것이 아니라 코드블럭{}을 넣어줌.
const HabitAddForm = memo((props) => {
	const inputRef = React.createRef();
	const formRef = React.createRef();
	const onSubmit = (event) => {
		// 리프레쉬 방지
		event.preventDefault();
		const name = inputRef.current.value;
		name && props.onAdd(name);
		inputRef.current.value = '';
		// this.formRef.current.reset();
	};

	return (
		<form ref={formRef} className="add-form" onSubmit={onSubmit}>
			<input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
			<button className="add-button">Add</button>
		</form>
	);
});

export default HabitAddForm;
