import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";

const filePath = new URL('./index.html', import.meta.url);

let data = await readFile(filePath, { encoding: 'utf-8' });

console.log(data);

const obj = {
    title: "My custom title",
    body: "my solid body"
};

for (let [key, value] of Object.entries(obj)) {
    data = data.replace(`{${key}}`, value);    
}

await writeFile(new URL('./index.html', import.meta.url), data);
console.log(data)