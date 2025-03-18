console.log(!true) 
// --> False

console.log(!!false)
// --> False

console.log(false && false)
// --> False

console.log(true && true)
// --> True

console.log(false && true)
// --> False

console.log(true && false)
// --> False

console.log(false || false)
// --> False

console.log(false || true)
// --> True

console.log(true || false)
// --> True

console.log(!false || (false && true ))
// --> True

console.log(!(false || true ) && true)
// --> False 

// 11-11 👍