import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';
export default handleProfileSignup(firstName, lastName, fileName) {
	const result = []
	const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)]
	return promise.allSettled(promises).then((results) =>{
		results.map(({status, value, reason}) => (result.push({
			status, 
			value: status === 'rejected' ? reason.toString() : value,
		})
		));
		return result;
	});
}
