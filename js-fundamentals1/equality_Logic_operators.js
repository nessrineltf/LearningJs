//// equality operators : == (loose ) ; === (strict) :

const age = "18" ; 

if (age == 18) {
    console.log("loose equality operator")
}


if (age === 18) {
    console.log("strict equality operator")
}


const favorite = Number( prompt ("what's your favorite number ! "))



if(favorite === 10){
console.log("10 is great number")
}


else if(favorite === 12){
    console.log("12 is great number")
    }



 else if (favorite === 13){
        console.log("13 is great number")
    }


else {
        console.log("invalid number !!! ")
    }

////// different operators  (!== (strict) , != (loose)) :: 

const bearthYear = "1800" ; 

if (bearthYear != 1800){
  console.log("ok")
}



/////// Basic Boolean Logic operators : And , OR , Not : 

///// And ===> &&
///// OR ===> || 
///// Not ===> !

const hasDrivingLicense = true ; 
const hasGoodVision = false ;
const isTired = false ;


if (hasDrivingLicense && hasGoodVision && !isTired ){
   console.log("sarah able to drive")
}

else if (hasDrivingLicense || hasGoodVision){
  console.log("sarah can be better !! ")
}

else {
    console.log("sarah can't drive")
}