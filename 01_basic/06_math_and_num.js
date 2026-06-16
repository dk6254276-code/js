const score = 400

//console.log(score) // output: 400

const balance = new Number(100)
//console.log(balance) //otput:[number:100]

//console.log(balance.toString().length)
//console.log(balance.toFixed(2)) /// output: 100.00 (after point 2)

const otherNum = 123.8966
//console.log(otherNum.toPrecision(3)) // output: 124(roundoff up to 3 num)

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-IN'))



//************************  Math   ******************/

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6)) // normal round off
// console.log(Math.ceil(4.1)) // round upper value output: 5
// console.log(Math.floor(4.9))  // roound off lower value output:4


//console.log(Math.random()) // ouput always betn 0-1
//console.log((Math.random()*10) + 1) // value >> 1
//console.log(Math.floor(Math.random()*10) + 1) // lower value +1

const min = 1
const max = 6 

console.log(Math.floor(Math.random() * (max - min + 1)) + min )
