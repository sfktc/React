import logo from './logo.svg';
import './App.css';

export const App = () => {
	const date = new Date();
	const formattedDate = date.getFullYear();
	return (
		//Декларативный код
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<h1>{formattedDate}</h1>
			</header>
		</div>
	);
};
