/*
Multi line comments in JavaScript

-- Variable Decloration
-- Primitive Types
-- Strings, integers, booleans, floats, arrays, abjects(dictionsary in python)
-- Function
-- Loops



// Variable Declorations
// Var, Let, Const
// var - Lenient scope we can reasign the varibal;e with car keyword, or just the Variable

*/

// var location = 'Chicago'



// let - can reasign a variabl;e after intial decloration buit not with let keyword

let maximal = 'Cheetor';



// arming a variable 
let decepticon;

decepticon = 'Waspinator';

decepticon = 'Black Widow';


// Const - very strict scoped, cannot reassign keyword, and cannot reasign variables
const pokemon = 'Bulbisaur';
console.log(pokemon)

// string variable
let first_name = 'Bill';

// Display our Value to JavaScript Console
console.log(first_name)

// int variable
let some_num = 31;
console.log(some_num)

// Float Values
let some_float = 3.14;
console.log(some_float)

// Array Variable (list in python)
let some_arr = [1,2,3,4]
console.log(some_arr)

let new_arr = [12,4,6,2,34,2, 6]
console.log(new_arr)


// Object Variable (dictionary python)
var someObject = {
    'test': 'please test me',
    'test2': 'still need testing'
};

console.log(someObject)

console.log(typeof(some_arr))

console.log(typeof(someObject))

console.log(typeof(some_float))

console.log(typeof(some_num))

// JavaScript Hoisting

// console.log(random_variable)
let random_variable = 'This is a randome string'
console.log(random_variable)

// concatination
// the best way to declare variables is with const and let
// var can be confusing and ambigues
let fullName = first_name + ' The Pony';
console.log(fullName)

// Setting a variable with const
const superHero = 'Iron man';
console.log(superHero)

// const superHero = 'Black Widow';
// console.log(superHero)

// will get an error because you cannot reasign a const variable

let nbaGoat = 'Micheal Jordan';
console.log(nbaGoat)

// cannot rediclare a blocked variable


/*

Basic math in JavaScript


*/
// addition
let sum = 5 + 5
console.log(sum)

// Subtraction
let dif = 10-5;
console.log(dif)

let sub = 10
sub -= 4
console.log(sub)

// Multiplication
let product = 5
product *= 5
console.log(product)
product = product * 10
console.log(product)

// Division
let divide = product / 100;
console.log(divide)

// Exponential
let square = 6**3;
console.log(square);

// Modulo
let mod = 5%2
console.log(mod)

//More math oporators
// finding the floor of decimal
console.log('This is a math floor')
let findFloor = Math.floor(26.7);
console.log(findFloor)

// finding the ceiling of a decimal
console.log('This is finding the Ceil')
let findCeil = Math.ceil(15.6)
console.log(findCeil)

console.log('Cannot run JavaScript in the console')


/*

-- JavaScript functions --
*/

// regular names functions

function addNums() {
    let num = 4;
    let num2 = 5;
    console.log('This is a regular named function')
    return num + num2
}
console.log(addNums())

// function with paramitors
function subNums(x, y){
    return x-y
}
console.log(subNums(17, 6));

let addNums2 = function(num, num2){
    console.log('This is a variable named function with parameters')
    return num + num2
}

// call our function and console.log
console.log(addNums2(12, 25))


// ES6
// arrow functions
// using an arrow function without paraenthisis can only be done
// with ONE parameter

let cubed = num => {
    return num ** 3
}
console.log(cubed(9))

// More then one Paranitor requires parenthisies
const addNums3 = (num1, num2) => {
    return num1 + num2
}
console.log(addNums3(5, 47))

// self Invoking Function 
// JavaScript Colsure

/**
 * the console log in the below example does not have to be provided
 * we're only using it to see the output in our console
 */

console.log((function(name) {
    let hello = 'Hello world,' + name;
    return hello
})(' lando'))

// JavaScript Control Flow
// if statement
function determineAge(age){
    if (age < 18) {
        return 'Minor'
    } else if(age >= 18 && age <= 65){
        return 'Adult not Retired'
    } else if(age > 65 && age <= 106){
        return 'Eldurly person'
    } else{
        return 'Maiar < -- thats what Gandalf is'
    }
}
console.log(determineAge(31))
console.log(determineAge(118))
console.log(determineAge(17))



console.log("new function below")
function determineAge2(age) {
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65) ? 'Adult Not Yet Retired' : 'Elderly Person Retired'
};

console.log(determineAge2(17))

// Mind Bender
let crazyStuff = some_float + '4'
// unfined, 7.14, 3.1+4, 3.1
console.log(typeof(crazyStuff))

console.log(crazyStuff)

let num2 = '5'
let crazyStuff5 = num2 + 4
console.log(crazyStuff5)

// int(), float(), srt(), list()

let insaneInTheMembrane = some_float + parseFloat('4')
console.log(insaneInTheMembrane.toFixed(2))

// Loops in JavaScript
function countByOne(){
    // for loop
    // (index counter; condition to break the for loop, incrementation)
    for (let i = 0; i < 20; i++){
        console.log(i)
    }
}

// countByOne()

let nameList = ['Swan', 'Ethan', 'Jacob', 'Alan', 'Alex']

function loopNames(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

// loopNames(nameList)

function decreaseByOne(){
    for (let i=20; i > 0; i--){
        console.log(i)
    }
    return 'Decrementation has stopped'
}

// console.log(decreaseByOne())

// While loops
function countWithWhile() {
    let i = 0;
    let text = '';

    // While Loop
    while (i < 10){
        text += `This numer is: ${i}.. `
        i++
    }
    return text
}
// console.log(countWithWhile())

function countWithDoWhile() {
    let i = 0;
    let text = '';

    // do or do not, there is no try
    do {
        text += `The number above is ...${i}`
        i++
    }

    while (i < 10)
    return text
}


let groupOfNames = ['Gary', 'Smith', 'Charmel', 'Ethan', 'Winstin']

console.log(groupOfNames[0])

let gary, smith, charmel;
[gary, smith, charmel,...groupOfNames] = groupOfNames

 console.log(gary, smith, charmel)
//  console.log(lovers)

//  for each loop
function showEachName(arr) {
    arr.forEach(
        element => console.log(element)
    )
}

showEachName(groupOfNames)

// JavaScript string methods
console.log(groupOfNames)
console.log(groupOfNames.toString())

console.log(typeof(groupOfNames))

// JavaScript Array methods

groupOfNames = ['Gary', 'Smith', 'Charmel', 'Ethan', 'Winstin']


let eNames = groupOfNames.map(element => {
    if (element[0] == 'E') {
        return element
    } else {
        return 'Gotta catch em all'
    }
})
console.log(eNames)

// .push will add to a list
// let moreENames = function(arr) {
//     b_array = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i][0]=='E') {
//             e_array.push(arr[i])
//         }
//         else {
//             e_arr.push('Gotta catch em all')
//         }
//     }
//     return e_array
// }
// console.log(moreENames(groupOfNames))



let myNums = [1,2,3,4]

let biggerNums = myNums.map(num => {
    return num + 5
})
console.log(biggerNums)
console.log("Original list[]")
console.log(myNums)



// .reduce
const nums = [2, 4, 6, 8, 10]

let numsReduced = nums.reduce((accumulator, currentNum)=> {
    return accumulator + currentNum
})

console.log(numsReduced)

let longishNames = groupOfNames.filter(name => name.length > 6)
console.log(longishNames)

// array methods for arrays with strange .join(), .slice(), .splice

// .join()
console.log(groupOfNames.join(" Shooby Dooby "))

// .slice()
// takes in a start and a stop
console.log(groupOfNames.slice(0, 3))

let oldName = groupOfNames.splice(0,1,'Freddie')
console.log(groupOfNames)
console.log(oldName)

function replaceNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'Goku')
        }
    };
    return arr;
};
console.log(replaceNames(groupOfNames));

// .search in a string == searching for letter 6
// and returning the index of that letter
console.log(groupOfNames[0].search('G'))


// .include()
console.log(groupOfNames.includes('Goku'))

let numsList = [2,4,6,8,10]
if (numsList.includes(4)) {
    console.log("Its hero the four you were looking 4")
} else {
    console.log("Its not here...")
}

console.log(groupOfNames.filter(name => name.toLowerCase().includes('g')))


// string.slice

console.log(groupOfNames[1].slice(0, groupOfNames[1].length))

console.log(groupOfNames[1])


// homework
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(str, names) {
    let foundMatch = false;
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (str.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
        console.log("Matched " + name);
        foundMatch = true;
      }
    }
    if (!foundMatch) {
      console.log("No Matches");
    }
  }
  
// findWords(dog_string, dog_names);


function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      arr.splice(i, 1, "even index");
    }
    return arr;
  }
  
const arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log(replaceEvens(arr)); // Output: ["even index","Baseball","even index","Goku","even index","Rodger"]
  
// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//     a * b
//   }
function multiply(a, b) {
    return a * b
}

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
