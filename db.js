const faker = require('faker');
const _ = require('lodash');

const genereateUsers = () => {
	const users = _.times(1000, n => ({
		"id": n + 1,
		"first_name": faker.name.firstName(),
		"last_name": faker.name.lastName(),
		"email": faker.internet.email(),
		"phone": faker.phone.phoneNumber(),
		"quiz_id": faker.random.number(),
		"time": faker.random.word(),
		"result": faker.random.number(),
		"created_at": faker.date.past(),
	}));

	return { "users": users }
};

module.exports = genereateUsers;

