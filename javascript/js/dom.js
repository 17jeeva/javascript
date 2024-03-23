//  let a= document.createElement("h1")
//   let b=document.createTextNode("welcome to why tap")
// //   a.appendChild(b);//<h1>welcome to why tap</h1>
//   document.body.appendChild(a.appendChild(b))
//   let c=document.createElement("p")
//   let d=document.createTextNode("hello world")
//   c.appendChild(d)
//   document.body.appendChild(c)
//   let li=document.createElement("li")
//   let li1=document.createTextNode("welcome")
//   li.appendChild(li1)
//    let ul=document.getElementById("ul1")
//    document.body.appendChild(li,ul)
let dr = document.getElementsByTagName("p")[2].innerText
// dr.innerHTML = `Welcome to Sathyam Cinemas enjoy your snacks`
console.log(dr)
let querysel = document.querySelector("#welcome").innerText
console.log(querysel)
let querysel1 = document.querySelector(".p1").innerText
console.log(querysel1)
console.log(document.body.firstElementChild.nodeName)
console.log(document.body.lastElementChild.nodeName)
console.log(document.body.firstElementChild.nodeValue)
// let grr = document.querySelectorAll("p");
// for(g in grr){
//   grr[g].style.background = "green"
// }
// let cl = document.getElementsByClassName("hhh")
// for(c in cl){
//   cl[c].style.cssText = "color : red; background : blue; font-size : 3rem; padding : 10px;"
// }
// document.getElementById("h5").style.cssText = "color : red; background : blue; font-size : 20rem; padding : 10px; font-style : 'bold';"
// let cn = document.body.childNodes
// console.log(cn.length)
// document.getElementById("ul1").addEventListener('mouseenter',()=>{
// document.getElementById("ul1").classList.add("hhh","hh")
// })
// document.getElementById("ul1").addEventListener('mouseleave',()=>{
// document.getElementById("ul1").classList.remove("hhh","hh")
// })
// document.getElementById("pp").classList.toggle("hh")
document.getElementById("ul1").addEventListener('mouseover',()=>{
document.getElementById("ul1").classList.toggle("hh")
})
document.getElementById("get").removeAttribute("href")
console.log(document.getElementById("li").parentNode)
console.log(document.getElementById("dv").childNodes)
console.log(document.getElementById("get").previousSibling.nodeType)



