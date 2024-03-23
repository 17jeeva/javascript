// ... - ellipsis
// (aru)rest parameter - used to identify no of argument as an array 
// it allow us to multiple element in single array they are versatail tool 

let int1 = (b,...a)=>{
    document.write(`b = ${b} a = ${a}`)
}

int1(10,30,40)

let a =["kani","amir"]
let b = ["ganesh","gopi"]

//spread - used to spread element of an array or object into another array or object

let c = [...a,...b]
console.log(c)
document.write(c)

let d = [{
    fname : "kani",
    age : 22

},{
    fname : "Hussain",
    age : 24
}
]

let f = [...d.filter(f => {return f.fname == "Hussain"})]
let e = [...d]

//filter Method
let final = e.filter(f => {return f.fname == "kani"})
console.log("Filter",final)

console.log(e)

let new_a = ["kani","don","len","jeeva"]
let [a1,b1,c1,d1] = new_a;
console.log(a1)
let obj1 = {name:"Amir",id:"8801"};
let {name,id} = obj1
console.log(name)
let obj2 = {name:"Ganesh",id:"8802"}
let obj3 = {...obj1,...obj2}
console.log(obj3)