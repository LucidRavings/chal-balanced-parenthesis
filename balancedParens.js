// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const checkBalance = (str) => {
    let splitStr = str.split("")
    let openParentheses = 0
    let closedParentheses = 0
    for (i = 0; i < str.length; i++){
        if(splitStr[i] === "("){
            openParentheses++
        } else if (splitStr[i] === ")"){
            closedParentheses++
        }
    }
    if(openParentheses === closedParentheses){
        return true
    } else {
        return false
    }
}

console.log(checkBalance(sample1))
console.log(checkBalance(sample2))
console.log(checkBalance(sample3))
console.log(checkBalance(sample4))