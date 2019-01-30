const fs = require("fs");
const filepath = "D:/node/FileSystemBasic/unterordner/"
const filename = "todo2.txt";

let content = "- Java üben \n";
content += "- Node.js üben \n";
content += "- Gemüse einkaufen \n"

fs.writeFile(filepath + filename, content, (err) => {
    if(err != null) {
        console.err(err.message);
    }
    else {
        console.log("File " + filepath + filename + " has been saved!")
    }
});