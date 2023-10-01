export default function createReportObject(employeesList) {
	return {
		allEmployees : {...employeesList},
		getNumberofDepartment: () => Object.keys(allEmployees).length,
	};
	

}
