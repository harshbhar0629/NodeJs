/** @format */

//  require mongoose
const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test"); // asyn process

main()
	.then(() => console.log("Connection successfull"))
	.catch((err) => {
		console.log("Error aya h");
		console.log(err);
	});

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// create first schema -> blueprint of collection
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});

// create first document using model it expect {collection_name, schema}
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

// insert in db collection User
// create first user
// const user1 = new User({ name: "Harsh", email: "abcd@gmail.com", age: 20 });

//  it will not shown in your db collection docx bcoz of you don't save it in db
// using .save() we can save this docs in mongodb
// user1.save();

// second user in collection-User
// const user2 = new User({ name: "Hello!", email: "abc@gmail.com", age: 19 });
// user2.save();

// create employee users
// const emp1 = new Employee({
//     name: "abcd",
//     email: "xyz@gmail.com",
//     age: 20,
// });

// // .save() returns promise
// emp1.save().then((res) => {
//     console.log("Successfully save");
//     console.log(res);
// }).catch((err) => {
//     console.log("Error in saving");
// })

// insert many
// User.insertMany([{
//     name: "hey",
//     email: "hey@gmail.com",
//     age: 26,
// }, {
//     name: "hii",
//     email: "hii@gmail.com",
//     age: 29,
// }, {
//     name: "toofan",
//     email: "toofan@gmail.com",
//     age: 40
//     ,
//     }]).then((res) => {
//         console.log("Successfully saved in db");
//         console.log(res);
// })

//

// search in db
// User.find({age: {$gt: 20}})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("Error aya h");
// 	});

// Employee.find({})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("Error aya h");
// 	});

// User.findOne({ age: { $gt: 20 } })
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("Error aya h");
// 	});

//

// update document
// User.updateOne({ name: "Harsh" }, { age: 25 }).then((res) => {
//     console.log("Update successfully");
//     console.log(res);
// }).catch((err) => {
//     console.log("Error aya");
//     console.log(err);
// });

// User.updateMany({ name: "Harsh" }, { age: 01 })
// 	.then((res) => {
// 		console.log("Update successfully");
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("Error aya");
// 		console.log(err);
//     });

// User.updateMany(
// 	{ $and: [{ age: { $gt: 20 } }, { name: "hey" }] },
// 	{ email: "london@gmail.com" }
// )
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("Error aagya");
// 	});

//

// Delete in db

// User.deleteOne({ name: "Harsh" })
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("err in db");
// 	});

// User.deleteMany({ age: { $gte: 29 } })
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log("Error aya h");
// 	});

