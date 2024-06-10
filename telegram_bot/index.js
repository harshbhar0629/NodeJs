/** @format */
//  for more details:  https://github.com/telegraf/telegraf
const { Telegraf } = require("telegraf");

/**
 * npm i telegraf install this package first
 * 
 * how to get a secret token for creating a bot
 * open telegram and search for bot father
 * to read instruction type /start and press enter
 * to create a new bot type /newBot and press enter
 * it will ask for a bot give a bot name without slash  EX: condingBot
 * then it will ask for username that end with 'bot' EX: cppCodingBot
 *
 * congratulation to your new bot it will give you link to connect your bot
 * https://t.me/cppCodingBot
 * https://core.telegram.org/bots/api
 *
 * ctx => context
 */

const bot = new Telegraf("7485479931:AAESOtaD2sr_vUqYro6KY4R5p2d_qwUbIG0");
bot.start((ctx) => ctx.reply("Welcome to cpp coding life"));

function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			return mid; // Target value found
		} else if (arr[mid] < target) {
			left = mid + 1; // Search in the right half
		} else {
			right = mid - 1; // Search in the left half
		}
	}

	return -1; // Target value not found
}

const mergesort = `function  mergeSort(arr) {
	// Base case: if the array has 0 or 1 element, it is already sorted
	if (arr.length <= 1) {
		return arr;
	}

	// Split the array into two halves
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	// Recursively sort each half and then merge them
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Compare the elements of the left and right arrays and merge them in sorted order
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// Concatenate any remaining elements from the left and right arrays
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`;

const quicksort = `function quickSort(arr, low, high) {
	if (low < high) {
		// Partition the array and get the pivot index
		let pivotIndex = partition(arr, low, high);

		// Recursively sort elements before and after partition
		quickSort(arr, low, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, high);
	}
	return arr;
}

function partition(arr, low, high) {
	// Use the last element as the pivot
	let pivot = arr[high];
	let i = low - 1;

	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			i++;
			// Swap arr[i] and arr[j]
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	// Swap arr[i + 1] and arr[high] (pivot)
	let temp = arr[i + 1];
	arr[i + 1] = arr[high];
	arr[high] = temp;

	return i + 1;
}`;

function selectionSort(arr) {
	// Iterate over each element in the array
	for (let i = 0; i < arr.length - 1; i++) {
		// Assume the current element is the smallest
		let minIndex = i;

		// Iterate over the rest of the array to find the smallest element
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j; // Update the index of the smallest element
			}
		}

		// Swap the found smallest element with the current element
		if (minIndex !== i) {
			let temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}

	return arr;
}

function insertionSort(arr) {
	// Iterate over each element in the array, starting from the second element
	for (let i = 1; i < arr.length; i++) {
		// Store the current element in a temporary variable
		let current = arr[i];
		// Initialize a variable to keep track of the position of the previous element
		let j = i - 1;

		// Shift elements of the sorted segment to the right to make space for the current element
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}

		// Insert the current element into the correct position
		arr[j + 1] = current;
	}

	return arr;
}

function bubbleSort(arr) {
	let n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		// Initialize a flag to check if a swap happened
		let swapped = false;

		for (let j = 0; j < n - 1 - i; j++) {
			// If the current element is greater than the next element, swap them
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}

		// If no elements were swapped in the inner loop, the array is already sorted
		if (!swapped) break;
	}

	return arr;
}

function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i; // Return the index of the target element if found
		}
	}
	return -1; // Return -1 if the target element is not found in the array
}

bot.command("binarysearch", (ctx) => ctx.reply(binarySearch));
bot.command("mergesort", (ctx) => ctx.reply(mergesort));
bot.command("quicksort", (ctx) => ctx.reply(quicksort));
bot.command("selectionsort", (ctx) => ctx.reply(selectionSort));
bot.command("insertionsort", (ctx) => ctx.reply(insertionSort));
bot.command("bubblesort", (ctx) => ctx.reply(bubbleSort));
bot.command("linearsearch", (ctx) => ctx.reply(linearSearch));
bot.hears("show searching", (ctx) =>
	ctx.reply("1. Linear Search \n2. Binary Search \n3. Ternary Search")
);
bot.hears("hi jii", (ctx) => ctx.reply("Hey there"));
bot.hears("who discovered you", (ctx) => ctx.reply("Harsh Bhardwaj dicovered me:"));
bot.hears("how can I contact to him", (ctx) =>
	ctx.reply(
		`Through via linkedin click here 👉👉 https://www.linkedin.com/in/harsh-bhardwaj-28491a249/`
	)
);

bot.on("sticker", (ctx) => ctx.reply("❤"));
bot.on("emoji", (ctx) => ctx.reply("Always Happy"));

bot.launch();
