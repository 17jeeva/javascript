// // syntax for try 
// // try{
// //statement
// // }

// //catch(argument){
// //false    
// //}

// // try{
// //     let var1 = "Try something new"
// //     document.write(var2)
    
// // }
// // catch(e){
// //     alert("declare a variable"+e.message)
// // }

// function fn1() {
//     let cdd = document.getElementById("text").value
// try{
//     if(cdd===""||cdd==="null"||!Number.isInteger(+cdd)){
//     // throw new Error("Sorry!! Out of stock")
//     throw "Oops"
//     throw {
//         name:"ReferenceError",message:"oops"
//     }
//     }
//     else{
//         document.write("Success verified Gopika")
//     }
    
// }
// catch(e){
//     // alert(e.name+":"+e.message)
//     alert(e)
// }
// document.write("Kindly pay attention")
// }
function fn1() {
    let cdd = document.getElementById("text").value
    try{
    try{
        if(cdd===""||cdd==="null"||!Number.isInteger(+cdd)){
            throw {
                name:"ReferenceError",message:"oops"
            }}
            else{
                document.write("verified")
            }
        }
    catch(e){
        alert(e.name)
    }}
    catch(e){
        alert(e.message)
    }
}

