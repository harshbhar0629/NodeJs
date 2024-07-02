/** @format */

const { faker } = require("@faker-js/faker");
const mysql1 = require("mysql2");

const connection = mysql1.createConnection({
	host: "localhost",
	user: "root",
	database: "test",
	password: "mysql@123",
}); // infite loop running to stop this connection use connection.end()

try {
	connection.query("Show tables", (err, result) => {
		if (err) throw err;
		console.log(result);
	})
}
catch (err) {
	console.log("Error aya h: ", err);
}

connection.end(); // to stop the further execution

// let createRandomUser = () => {
// 	return {
// 		userId: faker.string.uuid(),
// 		username: faker.internet.userName(),
// 		email: faker.internet.email(),
// 		avatar: faker.image.avatar(),
// 		password: faker.internet.password(),
// 		birthdate: faker.date.birthdate(),
// 		registeredAt: faker.date.past(),
// 	};
// };

let createRandomUser = () => {
	return {
		id: faker.string.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
};

// in database we want 4 type userid, name, password, email;
console.log(createRandomUser());
