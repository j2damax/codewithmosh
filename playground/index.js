// ES Module Syntax
import { get_encoding } from "tiktoken";

// Common JS Syntax
// const { get_encoding } = require("tiktoken");

const encoding = get_encoding("cl100k_base");

const text = "Hello, world!";
const tokens = encoding.encode(text);
console.log(tokens); 