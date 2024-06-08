const linearSearch = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return `Found at ${i}`;
        }
    }
    return NaN;
};

module.exports = {
	linearSearch: linearSearch,
};