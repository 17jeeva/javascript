//get item
//set item
// length
// remove item
// clear
// key

// sessionStorage.setItem("name","Thilak")
// sessionStorage.setItem("name1","Hussain")
// sessionStorage.setItem("name2","Ganesh")

// let sst = sessionStorage.getItem("name1")
// document.write(sst)
// JSON.parse(sst)

// localStorage.setItem("name","Amir")
// localStorage.etItem("name1","Ganesh")
// let sst = localStorage.getItem("name1")
// document.write(sst)
// localStorage.setItem("student1",JSON.stringify({name:"Amir",RegNo:"8801"}))

// localStorage.setItem("name2","Gopi")
// let sst1 = sessionStorage.setItem("name2")
// document.write(sst1)
// localStorage.setItem("student2",JSON.stringify({name:"Gopi",RegNo:"8802"}))

// let lst = localStorage.getItem("student2")
// let chk = JSON.parse(lst)
// document.write(lst)
// document.write(`${chk.name},${chk.RegNo}`)

// let rmv = localStorage.removeItem("student2")
// console.log(rmv)

// let ln = localStorage.length
// document.write(ln)

let ky = localStorage.key(1)
document.write(ky)
