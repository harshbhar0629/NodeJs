/** @format */

const mongoose = require("mongoose");

main()
	.then(() => {
		console.log("db connect successfully");
	})
	.catch((Err) => {
		console.log("Error in connection");
	});

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: 1
    },
    discount: {
        type: Number,
        default: 0
    }
});

const book = mongoose.model("book", bookSchema);

const book2 = new book({
    title: "Chemistry",
    author: "xyz",
    price: 269
});

book2.save();