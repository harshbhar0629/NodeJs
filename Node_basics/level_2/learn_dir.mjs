import { readFile } from "fs/promises";
// they all are promised based syntax
// bidefault it having a callback based syntax

// in Es module we can't use __dirname

// console.log(__dirname); for path we have to use
console.log(import.meta.url); // in Es module you have to use module.url for accessing the path


// const filePath = new URL('./index.html', import.meta.url);
// const data = await readFile(filePath);
// console.log(data);
// this above syntax giving me buffer error



const filePath = new URL("./index.html", import.meta.url);
const data = await readFile(filePath, {encoding: 'utf-8'});
console.log(data); 
//  now in this case it can convert this buffer data into specific data