document.getElementById("frm").addEventListener('click',(ar)=>{
    switch(ar.target.getAttribute("id")){
        case "rdo1":
            document.getElementById("dv").innerHTML = 10000
            break
        case "rdo2":
            document.getElementById("dv").innerHTML = 20000
            break
        case "rdo3":
            document.getElementById("dv").innerHTML = 30000
            break
        case "rdo4":
            document.getElementById("dv").innerHTML = 40000
            break
        default : 
            document.getElementById("dv").innerHTML = `Thank you visit again`
        break
        }
        console.log(ar.target.getAttribute("class"))
})
// if(ar.target.getAttribute("id")=="rdo1"){
//     document.getElementById("dv").innerHTML = 10000
// }
// else if (ar.target.getAttribute("id")=="rdo2"){
//     document.getElementById("dv").innerHTML = 20000 
// }
// // switch(expression){
//     case : 
//     statement
//     break
//     case : 
//     statement
//     break
//     default :
//     statement
//     break
// }
