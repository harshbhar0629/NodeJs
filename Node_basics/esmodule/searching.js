/** @format */
// named export we can fetch named export via {} parenthesis
export const linearSearch = (arr, x) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === x) {
			return `Found at ${i}`;
		}
	}
	return NaN;
};

// default export 
export default function f() {
	console.log("Hello World!")
}



// export default linearSearch;