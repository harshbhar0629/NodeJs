/** @format */

const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const mysql1 = require("mysql2");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql1.createConnection({
	host: "localhost",
	user: "root",
	database: "test",
	password: "mysql@123",
}); // infite loop running to stop this connection use connection.end()

// inserting new data

// let q = "Insert into user (id, username, email, pass) values (?, ?, ?, ?)";
// # WAY 1
// try {
// 	connection.query(q, userDetail, (err, result) => {
// 		if (err) throw err;
// 		console.log(result);
// 	})
// }
// catch (err) {
// 	console.log("Error aya h: ", err);
// }

// let q = "Insert into user (id, username, email, pass) values ?";
// # WAY 2
// let userDetail = [
// 	[123, "Hello@123", "123@gmail.com", 12345],
// 	[122, "Hello@122", "122@gmail.com", 12245],
// ];

// // if we have more array then
// try {
// 	connection.query(q, [userDetail], (err, result) => {
// 		if (err) throw err;
// 		console.log(result);
// 	});
// } catch (err) {
// 	console.log("Error aya h: ", err);
// }

let createRandomUser = () => {
	return {
		id: faker.string.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
};

let q = "Insert into user (id, username, email, pass) values ?";
// # WAY 3
let userDetail = [];
for (let i = 0; i < 100; i++) {
	let data = createRandomUser();
	userDetail.push(data);
}

try {
	connection.query(q, [userDetail], (err, result) => {
		if (err) throw err;
		console.log(result);
	});
} catch (err) {
	console.log("Error aya h");
	console.log(err);
}

connection.end(); // to stop the further execution

// in database we want 4 type userid, name, password, email;
console.log(createRandomUser());

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

// app.get("/", (req, res) => {
// 	res.send("Welcome to home page:");
// });

// home route
app.get("/", (req, res) => {
	//  we have to show the cnt of user
	let q = "select count(id) from user";
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			let cnt = result[0]["count(id)"];
			console.log(result);
			res.render("home.ejs", { cnt });
		});
	} catch (err) {
		console.log("Error coming: ");
		console.log(err);
		res.send("Some error in db");
	}
});

// show user details
app.get("/user", (req, res) => {
	let q = "select * from user";
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			let data = result;
			res.render("user.ejs", { data });
		});
	} catch (err) {
		console.log("Error aya h");
		res.send("Error in DB");
	}
	// res.send("Welcome to user route");
});

// edit route
app.get("/user/:id/edit", (req, res) => {
	let { id } = req.params;
	let q = `select * from user where id=${id}`;
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			let data = result[0];
			res.render("edit.ejs", data);
		});
	} catch (err) {
		console.log("Error aya h");
		res.send("Error in DB");
	}
	// res.send("Edit username");
});

// update route
app.patch("/user/:id", (req, res) => {
	let { id } = req.params;
	let { password, username } = req.body;
	let q = `select * from user where id=${id}`;
	try {
		connection.query(q, (err, result) => {
			if (err) throw err;
			let data = result[0];
			if (password !== data.password) {
				res.send("Wrong password!, Please enter correct password");
			}
			else {
				let q1 = `update user set username=${username} where id=${id}`;

				connection.query(q1, (err, result) => {
					if (err) throw err;
					res.redirect("/user");
					// res.send(result);
				});
			}
			res.send(data);
		});
	} catch (err) {
		console.log("Error aya h");
		res.send("Error in DB");
	}
});

app.listen(3000, () => {
	console.log("Server startedd at port: ", 3000);
});
