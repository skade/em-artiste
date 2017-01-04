var Module = require("../target/asmjs-unknown-emscripten/release/em-artiste.js");

var fs = require('fs');
var contents = fs.readFileSync('test/demo.graph').toString();

var result = Module.process_string("demo", contents, "demo image");
var contents = fs.writeFileSync('test/demo.svg', result);
