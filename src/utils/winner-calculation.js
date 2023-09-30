import { WinCondition } from '../constants/winning-combinations.js';

export const CalculateWinner = (squares) => {
	for (let i = 0; i < WinCondition.length; i++) {
		const [a, b, c] = WinCondition[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};
