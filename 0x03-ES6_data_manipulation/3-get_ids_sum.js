export default function getStudentIdsSum(sum) {
	return sum.reduce((acc, student) => acc + student.id), 0);
