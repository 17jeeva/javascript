import { empoly } from "./arrayofobject.js"
// import { detail } from "./arrayofobject.js"



let push_one =   { img:"image/anime_5.jpeg",emp_name : "Yuva",age : 20,roll_no : 2343, hobbies : ["cricket","football","onlinegame"],address:{door : 23445,street  :"west"} }

let push_two =   { img:"image/anime_6.jpeg",emp_name : "Kavin",age : 20,roll_no : 2343, hobbies : ["cricket","football","onlinegame"],address:{door : 23445,street  :"west"} }


document.getElementById("push").addEventListener('click',()=>{
    empoly.push(push_one)
    empoly.push(push_two)
    // console.log( "Empoly Var - ",empoly)
    document.getElementById("res").innerHTML = empoly.map((m)=>{
        return `<br> <img src=${m.img} width=100 height=100 ><br> Name : ${m.emp_name} <br> Age : ${m.age} <br> Roll No : ${m.roll_no} <br> Hobbies : ${m.hobbies} <br> Address : ${m.address.door} , ${m.address.street} <hr>`
    }).join("")



})


document.getElementById("filter").addEventListener('click',()=>{
    let filter_one = empoly.filter((f)=>{ return f.age == 23})
    // console.log(filter_one)
    document.getElementById("res").innerHTML = filter_one.map((m)=>{
        return `<br> <img src=${m.img} width=100 height=100 ><br> Name : ${m.emp_name} <br> Age : ${m.age} <br> Roll No : ${m.roll_no} <br> Hobbies : ${m.hobbies} <br> Address : ${m.address.door} , ${m.address.street} <hr>`
    }).join("")
})

document.getElementById("pop").addEventListener('click',()=>{
    empoly.pop()

    document.getElementById("res").innerHTML = empoly.map((m)=>{
        return `<br> <img src=${m.img} width=100 height=100 ><br> Name : ${m.emp_name} <br> Age : ${m.age} <br> Roll No : ${m.roll_no} <br> Hobbies : ${m.hobbies} <br> Address : ${m.address.door} , ${m.address.street} <hr>`
    }).join("")

})

