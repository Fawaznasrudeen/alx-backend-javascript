export default function divideFunction(numerator, denominator) {
	try {
		if(denominator === 0) {
			throw new Error();
		}
		return numerator / denominator;
	}
	.catch (error) {
		throw error('Cannot divide by 0');
	};
}
