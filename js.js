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



// let numbers=[0,1,2,5,-2,8,25,9,7];
// let result;
// result=numbers.map(function(number){

//     return `<li>${number}</li>`
// })

// result=result.join("");


// console.log(numbers);
// console.log(result);

//dar mesaleh balah ma omadim map() astefadeh kardim
//map karesh chiyeh? objecthayeh ti array 
//tabdil mikoneh be string va ye li add kardam
//barayeh sakhtaneh list va dar akhar az result.join()
//estefadeh kardam ta faseleh beyneshono moratab konam
// sort rooyeh arrayeh tagirato ijad mikoneh 
//filter joda gooneh in karo anjam mideh
//++++++++++++++++++++++++++++++++++++++++
 
//+++++++++++++++++++++++++++++++++++++++

// let numbers=[0,1,2,5,8,25,9,7];

// let sum=0;

// for(let number of numbers){
//     sum=sum+number;
// }
// console.log(sum);

//ba in dastoor ma addadeh dakheleh array jam kardim

// let numbers=[0,1,2,5,8,25,9,7];
// let x;
// let result=numbers.reduce(function(x,y){
//     return x+y;
// })
// console.log(result);
// ba estefadeh az dastooreh reduce ma mitoonim
// elemantahaye yek array ba ham jam konim
//+++++++++++++++++++++++++++++++++++++++



    //function declaration

    function sum(a,b){
        return a+b;
    }
    console.log(sum(2,5));

    // dar bala ma dar in function asme 
    //function seda mikonim mostagim
//============================================
    // function expiration

    let result=function(a,b){
        return a+b;
    }
    console.log(result(2,3));

    // tafavodeshoon bar ineh ke dar declaration
    //javaScript hamoon on in function ejra nemikoneh
    //vali dar expiration hamoon lahzeh ejra mikoneh

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    function sun(...rest){

        let Q=0;
        for(let item of rest){

            Q = Q + item;
        }

         return Q;

    }
    console.log(sun(1,2,4,5));

   
// megdar dehi be function ba parameter binahayad