let password = "Foundations28"

let character = /[A-Za-z]/.test(password)
// console.log(character)

let numbers = /\d/.test(password)
// console.log(numbers)

if(password.length>=10 && character === true && numbers === true){
    console.log('Success!')
    }else
    console.log('FAILURE')

 //checking for uppercase letters
 let upperCase = /[A-Z]/.test(password)
//  console.log (upperCase)

 //checking for any spaces
 let spaces = password.includes(' ')
//  console.log (spaces)

//is password valid with all criteria?
if(password.length>=10 && character === true && numbers === true && upperCase === true && spaces === false){
    console.log('Strong Password Successful!')
    }else
    console.log('FAILURE - Your password is weak')
 

// ASCII  attempt
let ASCII_code = password.charCodeAt(0);

console.log(ASCII_code)