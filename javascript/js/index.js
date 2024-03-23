document.write("This is external JS")
console.log("Welcome to Whytap services")
// alert("My Name is Amir")
// let a = prompt("Enter Your Age")
// document.write ("<br>a=",a)
// let b = Number(prompt("Enter number1"))
// let c = Number(prompt("Enter number2"))
// document.write("<br>",b+c)
function fn() {
    let dc = Number(document.getElementById("text1").value);
    let dc1 = Number(document.getElementById("text2").value);
    document.getElementById("res").innerHTML = dc + dc1
}
function fn1() {
    let dc = Number(document.getElementById("text1").value);
    let dc1 = Number(document.getElementById("text2").value);
    document.getElementById("res").innerHTML = dc - dc1
}

function fn2() {
    let dc = Number(document.getElementById("text1").value);
    let dc1 = Number(document.getElementById("text2").value);
    document.getElementById("res").innerHTML = dc * dc1
}

a = 5
var age = 20
let firstNameOf = "Amir"
console.log(firstNameOf)
document.write("<br>firstNameOf:", firstNameOf)
document.write(`<br><h1>firstNameOf: ${firstNameOf} </h1><br>age ${age}`)
console.log(a)
a = 10
console.log(a)
console.error("An unexpected error occured")
console.warn("This is not the right syntax")
// console.clear()
console.info("Bye Bye")
console.dir(document.body)
console.log(document.body)
// {key:value}
var c = {
    firstName: "Mohammad", middleName: "Amir", lastName: "K", age: 26, dob: "15.09.1997", imga : "images/car.jpg"
}
console.log(c)
console.table(c)
document.write(`<br>Age : ${c.age}<br>dob : ${c.dob}<br>firstName : ${c["firstName"]}<br>middleName : ${c.middleName}<br>lastName : ${c.lastName}<br> 
 <img src="${c.imga}" width="120px" height="120px">`)
let d = ["Apple","Samsung","Oneplus"]
console.log(d)
document.write(`<br> : ${d[0]}`)
// let student = {
//     firstName: "Mohammad", middleName: "Amir", lastName: "K", age: 26, dob: "15.09.1997"
// } 
let product = [
    {productId:"Mobile", productName: "Apple", productPrice: "1500",productImage : "images/iphone 15.jpg",address:["Street","DoorNo","Pincode"]},
    {productId:"Mobile", productName: "Samsung", productPrice: "1000",productImage : "images/samsung.jpg"},
    {productId:"Mobile", productName: "Oneplus", productPrice: "1500",productImage : "images/iphone 15.jpg"},
    {productId:"Mobile", productName: "Pixel8", productPrice: "1500",productImage : "images/iphone 15.jpg"}
]
document.write(`<br>productName : ${product[0].productName}<br>productId : ${product[0].productId} <br> Product 
Price: ${product[0].productPrice} <br> <img src="${product[0].productImage}" width="120px"> <br>address ${product[0].address[2]}<hr>`)
document.write(`<br>productName : ${product[1].productName}<br>productId : ${product[1].productId} <br> Product 
Price: ${product[1].productPrice} <br> <img src="${product[1].productImage}" width="120px">`)

// looping



