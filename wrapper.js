var Module = require("./em-artiste.js");

var fs = require('fs');
var contents = fs.readFileSync('demo.graph').toString();

var result = Module.process_string("demo", contents, "demo image");
console.log("result: ", result);
