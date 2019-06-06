//Import the React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component

const App = () => {
	const buttonText = 'Click Me!';
	return (
		<div>
			<label className="label" for="name">
				Enter Name:{' '}
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText} </button>
		</div>
	);
};

//Take the React Component and Show it on the Screen
ReactDOM.render(<App />, document.querySelector('#root'));
