function fn3(){
    document.getElementById("dvv").innerHTML = `<br>Brandname : Samsung<br>Processor : Snapdragon8Gen3<br>Color : Gray Yellow<br>Additional Features : Included with SPen`
}
let fn4=()=>{
    document.getElementById("dvv").innerHTML = `<br>Brandname : Iphone<br>Processor : Snapdragon8Gen3<br>Color : Gray Yellow<br>Additional Features : Included with SPen`
}
document.getElementById("oneplus").addEventListener('click',()=>{
    document.getElementById("dvv").innerHTML = `<br>Brandname : Oneplus<br>Processor : Snapdragon8Gen3<br>Color : Gray Yellow<br>Additional Features : Included with SPen`
})
// var d3 = (a,b,c)=>{
//     document.write(a+b+c)
// }
// // pass by value or call by value
// d3(10,30,54.66)
document.getElementById("button1").addEventListener('click',()=>{
    let a = 10,b = 20
    // document.write(`${a+b}`)
    document.getElementById("dvvvv").innerText=`${a+b}`
})
