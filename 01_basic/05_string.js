const name = "Deepak"
const repoCount = 50

//console.log(name + repoCount) // outdated


//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)


const gameName = new String("Deepak-gmail.com")

// console.log(gameName[0])
// console.log(gameName.__proto__)

//   const newString = gameName.substring(0,4)  
//   console.log(newString)

//   const anotherString = gameName.slice(-4,6) // we can give negative value 
//   console.log(anotherString)

//   const newString1 = "   hitesh   "
//   console.log(newString1)
//   console.log(newString1.trim())

  const url = "https://hitesh.com/hitesh%20choudhary"

  console.log(url.replace("%20", "-"))

  console.log(url.includes('sundar')) // this words present int that or not

  console.log(gameName.split('-')) // - se seprate krke array me convert kr dega