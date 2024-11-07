///////////////// type conversion (manual) ///////////////////////:: 

const inputYear = "2000"



console.log("before conversion" , typeof inputYear )



const conversion = Number(inputYear)


console.log("after conversion: " , typeof conversion  )



console.log(conversion+18)


const firstName = "marwa"

const convertFirstName = Number(firstName)
console.log(convertFirstName) // NaN ===> Not a Number


const BearthYear = 1999 ; 
console.log("BearthYear : " ,typeof BearthYear)

const result = String(BearthYear)
console.log("result : " ,typeof result)


  /////////////////// type coercion  : (automatic)  /////////////

  const age = 23 ; 
  console.log(typeof age)

   const sentence = "i'm"+" "+age+" "+ "year's old " /// + ===> string ; 
   console.log(sentence) // string

   console.log(typeof sentence)


//   const coercionNumber = "20" - "10" -3  //// - ==> Number ;
//   console.log( coercionNumber)


//// play guess the number :: 

const n = "1" + 1 

// n = n - 1    /// reasign

// ///// n ?


console.log(n) ;


// let x = 2 + 3 + 4 + 10 + 2000 + 100000 +"0"

let x =  "5"+2 + 3 + 4 + 10 + 3+"eya"   ; 
// // x ? ; 
console.log(x)


// const y = "10" - "4" - "3" -2 + "5" ;
// /// 10 - 4 - 3 - 2 ====> 1  ;;; 15
// //// y ?

console.log( y)


const test = "10" - "4" - "3"

console.log(typeof test)


///// truthy and falsy ::: 

//// conversion :: 

/// 5 falsy values : 0 , "" , undefined , null , NaN 

console.log(Boolean("0.1"))


/// coercion  ::: 

const monney = 1 

if (monney){
    console.log("you have money")
}
else {
    console.log("you dont have money")
}



let Height ; 

if (Height) {
    console.log("you are tall")
}
else {
    console.log("you are short")
}