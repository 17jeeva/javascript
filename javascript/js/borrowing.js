//syntax
// functionname.call(thisobj,arg)
// applymethod
// functionname.apply((thisobject),arg[])

// let gtt = (obj)=>{
//     console.log(obj)
// }
// let ytt = ()=>{
//     this.stu = gtt
//     console.log(`${this.stu}${this}`)
// }
// ytt.call

let obj = {
    name:"Ganesh",Designation:"bootstrap",fun:function(a,b){
    document.write(`<br>${this.name},${this.Designation},${a+b}`)
    }
}
obj.fun(10,20);

let obj1 = {
    name:"Hussain",Designation:"Tester"
}
// obj.fun.call(obj1,40,60)
// obj.fun.apply(obj1,[100,200])
let s = obj.fun.bind(obj1,40,60)
s()

// function Un1(c,d){
//     this.d = d;
//     this.c = c;

// }
// function Un1(name,Designation){
//     this.name = name;
//     this.Designation = Designation;

// }
// function ltt(e)
// {
//     let uzz = Un1.bind(this,"Vivek","Thilak")
//     this.e = e;
//     console.log(this)
// }
// let yi = new ltt(1000)

