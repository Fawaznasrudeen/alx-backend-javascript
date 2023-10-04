export default function createIteratorObject(report) {
	const array = [];
	for (const item of Object.values(report.allEmmployees)) {
		array.push(item);
	}
	return array;
}
