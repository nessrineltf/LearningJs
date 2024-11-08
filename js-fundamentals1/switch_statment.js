// //// switch statement ::: 

const day = "tuesday"  ; 


switch (day) {    //// if day === monday

    case "monday" :  ///// el hala 
    console.log("plan course structure ")
    console.log("go to coding meetup")

    break 
    case "tuesday" : 
    console.log("prepare nice exercices") 
    break
    case "wesnesday" :    ///// if (day === "wesnesday" || day ===thursday ){console.log("write and test code")}
    case "thursday" : 
    console.log("write and test code")
    break

    case  "friday" : 
    case "saturday" : 
    case "sunday" :
        console.log("enjoy the weekend !!! ")
    break

    default : 
    console.log("not a valid day !!! ")

}

///// if else condition ::: 
    if (day ==="monday" ){

    console.log("plan course structure ")
    console.log("go to coding meetup")
}

else if (day === "tuesday") {
    console.log("prepare nice exercices") 
}

else if (day === "wesnesday" || day === "thursday" ) {
    console.log("write and test code") }

else if (day === "friday" || day === "saturday" || day === "sunday" ) {
    console.log("enjoy the weekend !!! ")
}
 else {
    console.log("not a valid day !!! ")
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// statement and expressions ::: 


//// expressions : 
// let x = 5 + 3 = 8 ;
// 1991 
// true && false && !false 




// const age = 18 /// expression .. 

// if (age === 18) { /// statement
//  console.log("any way !! ") //// expression 
// }

//// print =====> console.log()
const me = "nessrine" ; 

console.log(`my name is ${me}  `)   //// we can not put if condition inside the console.log() because its not an expression ..... 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// the conditional operator (ternary)  (3 parties  , 3 parts)

const age = 20 ;  /// /expression 
const name = "nasima" ;  /// /expression 

const isAdult = age>= 18 ? "he can get a drive license 🚓" : "no he still a kid 🦰"  ///// expression 
console.log(isAdult)
   
   console.log(`i'm ${age} years old so ${age>=18 ? " i can get a drive license 🚓" :" i still a kid 🦰" }`)

let isAdult2 ; 

if (age>=18) {
    isAdult2 = "he can get a drive license 🚓"
}
else { 

        isAdult2 = "no he still a kid 🦰"
}

console.log(isAdult2)





////condition ?true : false




if (age>=18) {
    console.log("he can get a drive license 🚓")
}