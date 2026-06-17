// Dates 


let myDate = new Date()
/* console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log( typeof myDate) */

//let myCreatedDate = new Date(2026 , 0, 23)
//let myCreatedDate = new Date(2026 , 0, 23, 5 , 6)  //year , month , date , hour, minute sec
//let myCreatedDate = new Date("2026-01-14") 
let myCreatedDate = new Date("01-14-2026") // indian std : mm-dd-yyyy
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date() 
console.log(newDate);
console.log(newDate.getMonth() + 1); // start from 0 so we add 1
console.log(newDate.getDay());

 //` ${newDate.getDay()} and the time is `

 newDate.toLocaleDateString( 'default' , {
    weekday: "long",
 })