// fun(10,20)
// function fun(a,b){
//     console.log(a+b)
// }

// let d = 55
// let gta = ()=>{
//     let a = 100
//     let btt = ()=>{
//         let b = 200
//         return a+b
//     }
//     let ctt = ()=>{
//         return btt
//     }
//     return ctt (a*b)
// }
// console.log(gta())

// let cbb = 10
// function fun(a) {
//     function abb(b, cbb) {
//         return cdd(cbb + b);
//     }
//     function cdd(c) {
//         return cbb * c;
//     }
//     return abb;
// }

// var hoi = fun(10);
// console.log(hoi(15));

let cbb = 10;

function fun(a) {
    function abb(b) {
        return cdd(cbb + b);
    }

    function cdd(c) {
        return cbb * c;
    }

    return abb;
}

var hoi = fun(10);
console.log(hoi(15));



