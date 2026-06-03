const fs = require("fs");
console.log("A: Start");
fs.readFile("demo.txt", "utf8", (err, data) => {
    console.log("B: File Read:", data);
});
console.log("C: End");
