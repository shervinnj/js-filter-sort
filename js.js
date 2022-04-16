// let numbers=[0,1,2,5,-2,8,25,9,7];
// let result;


//+++++++++++++++++++++++++++++++++++++
// result = numbers.sort(function(x,y){
//     return x-y
// })

// sort barayeh addadeh kochik be bozorg
//++++++++++++++++++++++++++++++++++++++
// result = numbers.filter(function(number){
// return number>0
// })

//har adadi ke bozorgtar az 0 bashe chap kon
//+++++++++++++++++++++++++++++++++++



let numbers=[0,1,2,5,-2,8,25,9,7];
let result;
result=numbers.map(function(number){

    return `<li>${number}</li>`
})

result=result.join("");


console.log(numbers);
console.log(result);

//dar mesaleh balah ma omadim map() astefadeh kardim
//map karesh chiyeh? objecthayeh ti array 
//tabdil mikoneh be string va ye li add kardam
//barayeh sakhtaneh list va dar akhar az result.join()
//estefadeh kardam ta faseleh beyneshono moratab konam
