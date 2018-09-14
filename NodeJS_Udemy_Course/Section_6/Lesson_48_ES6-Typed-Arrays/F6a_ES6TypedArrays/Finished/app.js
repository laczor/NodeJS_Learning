//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
//1. So we are declaring that we can store 8 byte(64bits),  as an array in our temporary memory location called buffer.
//2. Typed Array, is an array,
var buffer = new ArrayBuffer(8);			// we can store 64 bits, (64 0 or 1)
var view = new Int32Array(buffer);			//We declare a array, which holds data stored in 32 bits. So we can store big numbers, but only two.
view[0] = 5;
view[1] = 1500000;
console.log(view);