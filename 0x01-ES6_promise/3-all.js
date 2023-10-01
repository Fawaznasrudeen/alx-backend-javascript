import {uploadPhoto, createUser} from './utils.js';
function handleProfileSignup() {
	return promise.all([uploadPhoto(), createUser()]);
	.then((data) => {
		console.log(`${data[0].body} ${data[1].firstName ${data[1].lastName}`);
		});
	.catch(() => console.log('Signup system offline'));
export default handleProfileSignup;

