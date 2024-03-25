import {empoly} from "./arrayofobject.js";

// { stu_name : "kani",age : 22,roll_no : 2343, hobbies : ["cricket","football","onlinegame"],address:{door : 23445,street  :"west"} },

 let s = document.getElementById("check").addEventListener('click',() =>{

    document.getElementById("res").innerHTML = empoly.map((m)=>{
        return `<br> <img src=${m.img} width=100 height=100 ><br> Name : ${m.emp_name} <br> Age : ${m.age} <br> Roll No : ${m.roll_no} <br> Hobbies : ${m.hobbies} <br> Address : ${m.address.door} , ${m.address.street} <hr>`
    }).join("")

})




