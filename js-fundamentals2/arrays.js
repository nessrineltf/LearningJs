///// array (data structure) ::: 
/// arrays are 0 based .



// const freinds = ["eya" , "karim" ,"mohamed"]

// console.log(freinds[1])

// freinds[1] = "achref" ; 
// freinds[2] = "yahya"
// console.log(freinds)

// function log (){
//  return "hello"
// }
// // console.log(log())
// const lastname = "shmedtman"


// const info = ["jhon",1990, log() , lastname , freinds ]

// console.log(info[info.length-1])


///// add element for the array :: /// push(tzid mel lekher) , unshif(tzid meloul)

// const freinds = ["eya" , "karim" ,"mohamed","jhon","peter"]

// console.log(freinds)

// freinds.push("elyes")

// console.log(freinds)

// freinds.unshift("ali")
// console.log(freinds)


// //// delete element for the array :: pop(tfassekh lekher) , shift(tfasakh men kodem)

// freinds.pop()
// console.log(freinds)
// freinds.shift()
// console.log(freinds)


///// .length , .push , .unshift , .pop , .shift 
// const friend1 = "eya" ; 
// const friend2 = "karim" ;
//  const friend3 = "mohamed" ;

const freind = ["eya" , "karim" ,"mohamed", "eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed","eya" , "karim" ,"mohamed", ] 

console.log(freind)
console.log(freind[0])

const toul = freind.length

console.log(toul)

/ array[index]

console.log("freind:",freind[freind.length-1])



const years = new Array (1991,200,2003)
console.log(years[1])

////////////////

const freinds = ["eya" , "karim" ,"mohamed"]
console.log("freinds : ",freinds)

freinds[2] = "salma" ;

freinds[0] = "yomna"

console.log(freinds)
const firstName = "nessrine"
function hello (){
   return `hello` 
}

const infomation = [firstName , "lastname" , 2000 , freinds , hello() ]

console.log("information",infomation)
console.log(infomation[3])



///// arrays methods (add)  push , unshift ::: 

///// .length ===> nchoufou beha etoul mte3 l'array ... 
//// .push ====> tzid menteli 
///// .unshift ===> tzid men kodem

//const freinds = ["eya" , "karim" ,"mohamed"]


freinds.push("marwa")
freinds.unshift("nessrine")

console.log(freinds[freinds.length-1])
console.log(freinds)

///// arrays methods (delete)  pop , shift ::: 

/// .pop tnakess menteli 
/// .shift tnakess men kodem

const freindss = ["eya" , "karim" ,"mohamed","salma" , "yomna" ,"nessrine"]
console.log("freindss initial state ",freindss)
freindss.pop()
console.log(freindss)
freindss.shift()
console.log("freindss after pop & shift ",freindss)

// console.log

///// .length , .push("hfhf") , .unshift("hfhfhf") , .pop() , .shif() ...