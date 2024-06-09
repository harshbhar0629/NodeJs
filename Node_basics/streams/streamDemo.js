/** @format */
//5. include stream we can transform stream
const transformStream = require("stream");

//1. in this stream we have to modified input.txt
const fs = require("fs");
//2.  by using create read stream we can read the data chunk by chunk
let fileStream = fs.createReadStream(__dirname + "/input.txt");

//3. it can store output stream
let outputStream = process.stdout;

// 6. transform is a constructor what const. expect it expect a object itself and inside obj it take 3 input chunk a piece of code and encoding by default text and next call back is helping you to reading a next chunk
let middleStream = new transformStream.Transform({
    transform(chunk, enc, nextCB) {
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(() => {
            nextCB();
        }, 2000); // it give delay of 1second otherwise nextCB immediately get execute
        // nextCB();
    }
});


//4. it connect to your input stream to the output stream
// fileStream.pipe(outputStream);

// 7. it get readable stream and then connect to output stream]
let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);