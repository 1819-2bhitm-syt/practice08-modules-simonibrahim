const fs = require("fs");
const filename = "todo.txt";

console.log("Entire content of " + filename + " will be read synchronously.");

let content = fs.readFile(filename, {encoding: "utf8"}, (err, data) => {
    if(err != null) {
        console.error(err.message);
    }
    else {
        console.log();
        console.log(`Content of ${filename}:`);
        console.log(data);
        console.log("Reading " + filename + " finished successfully." )
    }
});
console.log("Meanwhile Node.js app can do something else.");
console.log("...");
