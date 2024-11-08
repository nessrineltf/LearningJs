"use strict"   ///// best practice .... 

let hasDriversLicense = false ; 
const passTest = true ; 

if (passTest){
    hasDriversLicense = true ; 
}

if (hasDriversLicense) {
    console.log("You can drive now!");
}


////// functions :::: 


function logger (){
    console.log("Hello");   //// function body ... 
}


//// invocation //// call the function /// run the function  (kifech n3aytoul ha) :: 

logger()

///////  

function fruitProcessor (apples,oranges) {
    console.log(apples,oranges)
}


fruitProcessor(5,10)   //// parametres

// const age = "5"
// console.log(   Number(age)        ) // invocation of Number() build function


function fruitProcessor (apples,oranges) {  //// generic function
         
    const juice = `juice with ${apples} apples and ${oranges} oranges`
  
    return juice ; 

    
     }


    console.log( fruitProcessor(5,8))


///// types :  function declaration , function expression



function calcage1 (birthYear) {   //// function declaration 
    return 2024 - birthYear
}


console.log(calcage1(2000))





   const calcAge2 = function  (birthYear){  //// function expression 
    return 2024 - birthYear
   }

   console.log(calcAge2(1900))

   /// dry ==> d'ont repeat your self .... 



   ////// arrow function  ::: 

   const calcAge3   = birthYear =>  2024 - birthYear ; 

   console.log(calcAge3(2000))


// const yearsUntilRetirement = birthYear => {
//     const age = 2024 - birthYear;
//     const retirement = 60 - age ;  
//     return retirement;
// }


const yearsUntilRetirement = (birthYear,fristname) => {
    const age = 2024 - birthYear;
    console.log(age)
    const retirement = 60 - age ;  
    
  return `${fristname} retires in ${retirement} years ....`

}

  console.log(yearsUntilRetirement(1992,"jhon"))


//////////////// function calling other function ::: 



const cutPieces = fruit => fruit* 4 ;

function fruitProcessor (apple,orange) {
    const applepieces = cutPieces(apple)
    const orangepieces = cutPieces(orange)

    const juice = `juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange ..`
    return juice
}

console.log(fruitProcessor(2,10))


const calcAge = function (birthYear){
    return 2024 - birthYear ;
}

function yearsUntilRetirement (B_Year , fristname){
   const age =  calcAge(B_Year)
   const retirement = 60 - age 
   console.log(retirement)
  if (retirement > 0) {
  const result = `${fristname} retires in ${retirement} years`
  return result ; 
  }
  else {
    return `${fristname} has already retired :)`
  }
}

console.log(yearsUntilRetirement(2000 , "nessrine"))


console.log(yearsUntilRetirement(2004 , "jhon"))





