// 
class Const{
    constructor(name,id,Regno){
        this.name=name
        this.id=id
        this.Regno=Regno
        
    }
    getDetails(){
        return ` ${this.name}<br>${this.id}<br>${this.Regno}`
    }
    getDetails(a,b){
        return`${a+b}`

    }
}
let details= new Const("ganesh",224,4002)
document.write(details.getDetails())
document.write(details.getDetails(1,4))


//     // constructor(){
//     //     document.write("hello")
//     // }
//     sum(){
//         document.write("hello world")
//     }
    // constructor(a,b){
    //     document.write(`${a}${b}`)
    // }
    // con1(x,y){
    //     document.write(`${x}${y}`)

    // }
    

// }
// // let sum1= new Const()
// // sum1.sum()
// let con= new Const(10,30)
// con.con1(10,4)