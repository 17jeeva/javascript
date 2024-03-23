// arithmetic operators + - * / %
// relational operators is also knows as comparison operator.. < > >= <= != == === boolean is also knows as true or false operator
// logical operator and or not && || !
// assignment operator += -= /= *= %=
// uniary operator increment and decreament ++ --
// conditional statement if elseif elseifladder switch nestedif

// let a = 10 , b = 30;
// document.write(`<br>${a==b}`)
// document.write(`<br>${a===b}`)
// document.write(`<br>${a>b}`)
// document.write(`<br>${a<b}`)
// document.write(`<br>${b>=a}`)
// document.write(`<br>${a<=b}`)
// document.write(`<br>${a!=b}`)

let product = "Samsung",price = 5000;
document.write(`<br>${!product=="Samsung"&&price>=5000}`)
document.write(`<br>${price++}`)
document.write(`<br>${price}`)
document.write(`<br>${--price}`)

// if(condition){
//     (statement) // syntax
// }

// if(product=="Samsung"||price==50000){
//     document.write(`<br>Offer available ${product}`)
// }
// else {
//     document.write(`<br>Offer not available for this device`)
// }

let pdct = document.getElementById("prdct");
let price1 = document.getElementById("prc");
function fn1(){
    if(pdct.value=="Samsung"&&price1.value>=5000)
    {
        document.getElementById('dv').innerHTML=`<br>Offer available ${pdct.value}`
    }
    else {
        document.getElementById('dv').innerHTML=`<br>Offer not available for this device`
    }  
}
let fn2=(e)=>{
    e.preventDefault()
    if(pdct.value=="Samsung"&&price1.value>=5000)
     {
         document.getElementById('dv').innerHTML=`<br>20% Discount for samsung ${pdct.value}`
     }
     else if(pdct.value=="Apple"&&price1.value>=10000)
     {document.getElementById('dv').innerHTML=`<br>10% Discount for apple ${pdct.value}`}
     else if(pdct.value=="Oneplus"&&price1.value>=15000)
     {document.getElementById('dv').innerHTML=`<br>5% Discount for oneplus ${pdct.value}`}
     else {
         document.getElementById('dv').innerHTML=`<br>Thank you for visiting us`
     }   
}