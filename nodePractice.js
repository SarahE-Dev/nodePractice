// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1)

const lastName = getInput(2)

console.log("Hello, " + firstName + " " + lastName)

console.log(firstName.toUpperCase() + " " + lastName.toUpperCase() + " is your name capitalized.")

console.log(firstName.charAt(0) + "." + lastName.charAt(0) + ".")

console.log(firstName.charAt(0).toLowerCase() + lastName.toLowerCase() + ".prsvr@gmail.com")
