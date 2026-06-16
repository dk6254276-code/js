// #premitive 
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100;     // typeof   : number
const scoreVal = 100.3;    // typeof   :number

const isLoggedIn = false;     // typeof: boolean  
const outSidetemp = null;   // typeof: object
let userEmail;  // typeof: undefined

const id = Symbol('123')   // typeof: symbol
const anotherId = Symbol('123') // typeof: symbol

console.log(id === anotherId) // false bcs symbl define unique

const bigNum = 34578365634874n   //n =>  bigInt   // typeof:bigint



// reference ( non-premitive )

// Array , Objects , Function 

const heros = ["saktiman", "naagraj"] // Array  // typeof:object

 let myObj = {
    name : "Deepak",  //Objects   // typeof: object
    age: 22,
}

const myfunction = function() {    // typeof: function
    console.log("Hello world");
}

// console.log(typeof score)
// console.log(typeof scoreVal)
// console.log(typeof isLoggedIn)
// console.log(typeof outSidetemp)
// console.log(typeof userEmail)
// console.log(typeof id)
// console.log(typeof bigNum)
// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)

//****************** Memory**********

// stack (premitive) , Heap (Non-premitive)

let myYoutubeCh = "hiteshchaudhry"

let another = myYoutubeCh
another = "chaiorcode"
//  console.log(myYoutubeCh)
//   console.log(another)

let myObj5 = {
    email : "dk625427@gamil.com",
    upi : "myrag@ibl"
}

let myObj2= myObj5

myObj2.email = "dk6254276@gamil.com"

console.log(myObj5.email)
console.log(myObj2.email)