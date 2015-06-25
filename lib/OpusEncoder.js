
"use strict";

var binding = require('bindings')(`electron-opus-${process.arch}.node`);
module.exports = binding.OpusEncoder;
