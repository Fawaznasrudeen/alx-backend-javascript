export default function(mathFunction) {
	const queue = [];
	let res;
	try {
		res = mathFunction();
		}.catch(error) {
			res = `Error: ${error.messsage}`;
		};
	queue.push(res);
	queue.push('Guardrail was processed');
	return queue;
}
