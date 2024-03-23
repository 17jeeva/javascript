// match => it is searching for the mapping string and return array of information or null
// test  => boolean value return match true or else false
// exec  => same as test
// search => matches string and returns array of first index if not return the array index will be -1
// split => splits one or two more string and matches it
// replace => changing from old string to new string
//literals and constructor
// literal => \pattern\
//constructor literals => "pattern"
// \\. or \.

// document.getElementById("btn-submit").addEventListener("click",()=>{
//     let a = document.getElementById("text1").value
//     // let ptt = "BMW"
//     // let ptt = new RegExp("[a-z]"/u)
//     let ptt = /[a-z]/
//     console.log(ptt.test(a))
// })
// ///[a] => character class
// \d=>digits
// \D=>not true digits
// \W=>only capital letters sometimes 0-9 acceptable
// \w=>both capital and small letters 0-9 acceptable
// \s=>widespace nextline tabspace
// symbols=>no choice typing is the best option..
//repetative quantifier.. L repeats example + starts one or more occurence also use * => zero or more occurence ? => same operation
// repetation => a{3}
//a{2,5}
//a{2,}
//a{,}
// [a-zA-Z0-9]
// [^a-z0-9]
// //shortcut character class...

document.getElementById("btn-submit").addEventListener("click",()=>{
    let a = document.getElementById("text1").value
    // let ptt = "BMW"
    // let ptt = new RegExp("[a-z]"/u)
    let ptt = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i
    // let tar = a.split(ptt)
    let tar = a.match(ptt)
    console.log(tar)
})
let ptt = /[\b\w]+/g
//alternation |




 
