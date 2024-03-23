class Student{
    
     name="gopi";
     Regno=2054;
     age=21;
     studentid=3221
     stu1(){
        document.write(`${stu.name}<br>${this.Regno}<br>${this.age}<br>${this.studentid}`)
     }
     stu2(a,b){
        return a+b
    }
    var1=()=>{
        document.write(`${this.name}<br>${this.Regno}<br>${this.age}<br>${this.studentid}`)

    }

}

let stu= new Student()
stu.stu1()
document.write(stu.stu2(10,20))
stu.var1()
// stu.stu2(10,20)
// console.log(stu)
