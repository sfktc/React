import { CalculateWinner } from './winner-calculation';

export const SetStatus = ({ squares, currentMove, xIsNext }) => {
	const winner = CalculateWinner(squares);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else if (currentMove === 9 && winner === null) {
		status = 'Draw';
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}
	console.log(status);
	return status;
};
