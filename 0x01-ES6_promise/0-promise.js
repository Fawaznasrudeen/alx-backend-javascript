function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Sample API responded");
		}, 1000);
	});
}
export default getResponseFromAPI;
