// singleton 
//object.create // constructor initialize

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Deepak",
    "full Name" : "Deepak Yadav",
    [mySym]: "myKey1", /// to initialize symbol in object
    age : 23,
    location : "Agartala",
    email: "dk6254276@gamil.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Satuarday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full Name"])  // to access this type or symbol only use []
// console.log(jsUser[mySym])

jsUser.age= 25 // to update value in object
//Object.freeze(jsUser)  // to fix details

jsUser.email = " dk9934@gamil.com" // not updated bcz alerady freeze
//console.log(jsUser) 

jsUser.greeting = function() {
    console.log("Hello , js user")
}

jsUser.greetingTwo = function() {
    console.log(`Hello , js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())