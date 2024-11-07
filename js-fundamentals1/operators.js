//// operators > ,< ,  >= , <=  (boolean)
// let now = 2024 ; 

// let eyaAge = 2000 ; 
// let marwaAge = 2002 ; 

// let age1 = now - eyaAge
// console.log(age1)

// let age2 = now - marwaAge
// console.log(age2)

// console.log(now - eyaAge >  now - marwaAge)

// const averageAge = (now - eyaAge + now - marwaAge) /2
// console.log(averageAge)

// console.log(age1 > age2) /// boolean true or false
// console.log(age1<=24)

/// first one : concatination 
// let firstName = "jhon" ; 
// let lastName = "breed" ; 
// let now = 2024 ; 
// let bearthYear = 1990 ;  
// let job = "full stack web developper" ; 

 //let information = "i'm" + " "+  firstName + " "+lastName+ " "+ "i'm" +" "+  (now-bearthYear)+ " "+ "years old" +" " + "i work as a "+ " "+ job  

//////////////////////////////////////////////////////////////////

/// second one : template leterales : "" '' `` ecs6 ;

//  let information = `i'm ${firstName} ${lastName} i'm ${now-bearthYear} years old i work as ${job}    `

//  console.log(information)

// let sentance = "string with \n multiple \n lines " 
// let sentance = `string with
// multiplier
// lines 
// salma`
// console.log(sentance)

/////////////////////////////////////////////////////// 
// desecions :  (if and else statement)

// const age = 10 ; 



// if (age >= 18) {
// console.log("yomna can start driving license ")
// } else {
//    const yearsLeft = 18 -age 
//    console.log(`yomna can start driving license after ${yearsLeft} years`)
// } 

// const bearthYear = 2011 ; 


// if (bearthYear <= 2000) {
//  let century = 20    /// block of if condition 

// }
// if (bearthYear > 2000) {
//  let century = 21 ; 
//  console.log(century)
// }


//// task : 

let markMass=78 ;
let marHight=1.69 ;
let johnMass=92 ;
let johnhight=1.95 ;
let markBmi = markMass / marHight **2
 console.log("mark :" , markBmi)

 let jhonBmi = johnMass / johnhight ** 2 

 console.log("jhon : " , jhonBmi)


 if (markBmi > jhonBmi) {
    console.log(`mark bmi ${markBmi} is higher than jhon bmi ${jhonBmi}`)
 }
 else {
    console.log(`jhon bmi ${jhonBmi} is higher than mark bmi ${markBmi} `)
 }


