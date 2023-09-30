export default function createReportObject(employeesList) {
	const obj = {
		allEmployees : {...employessList},
		getNumberofDepartment: () => Object.keys(obj.allEmployees).length,
	};
	return obj;

}
