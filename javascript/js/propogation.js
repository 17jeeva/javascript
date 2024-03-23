// let parent = document.querySelector("div")
// let child = document.querySelector(".button1")
// parent.addEventListener('click',()=>{
// console.log("clicked parent")
// },true)
// child.addEventListener('click',()=>{
// console.log("child has been clicked!")
// })


let parent = document.querySelector("ul")
let child = document.querySelectorAll("li")
parent.addEventListener('click',()=>{
console.log("clicked parent")},true)
child.forEach(element => {
    element.addEventListener('click',()=>{
        // event.stopPropagation();
        event.target.closest("li").classList.toggle("pgb")
        console.log("child has been clicked!")
    })    
});


