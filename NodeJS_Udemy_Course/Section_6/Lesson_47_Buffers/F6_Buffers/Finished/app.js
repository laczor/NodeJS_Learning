//Buffer is global!
// buffer(String value, encoding)  -> take the string and encode it in utf8
var buf = new Buffer('Hello', 'utf8');
console.log(buf);						//<Buffer 48 65 6c 6c 6f>, hexadecimal notation
console.log(buf.toString());			// Convert it back to characters
console.log(buf.toJSON());				// We can convert it to JSOn to { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }			
console.log(buf[2]);					// Get the character set number

buf.write('wo');						//it behaves like an array, we can overwrite it's characters like an array
console.log(buf.toString());			// From "He" + "llo" --> "wo" + "llo"