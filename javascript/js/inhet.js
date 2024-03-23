// // class

// // class Student{
// //     //data member or properties or instance
// //     name = "Kani";
// //     age = 22;
// //     id = "02";
// //     det(){
// //         document.write(<br>${this.name}<br>${this.age}<br>${this.id})
// //     } ;

// //     sum(a,b){
// //         return a*b

// //     }

// //     che = ()=>{
// //         document.write(<br>${this.name}<br>${this.age}<br>${this.id})

// //     }

// // }

// // let res = new Student()
// // res.det()


// // let s = res.sum(3,3)
// // document.write(<br>${s})

// // res.che()

// // class Stu{
// //     constructor(n,a){
// //     this.fname = n;
// //     this.age = a;
// //     }
// //     det(){
// //         return <br> Name : ${this.fname} <br> Age : ${this.age}
// //     }
// // }

// // let check = new Stu("kani",22)

// // // document.write(check.fname)
// // document.write(check.det())



// //Inheritance

// // class Par{
// //     constructor(n,i,a){
// //          this.n=n
// //          this.i=i
// //          this.a=a
// //     }

// //     set(){
// //         return <br> ${this.n}<br> ${this.i}<br> ${this.a}
// //     }
// // }

// // class Chil extends Par {

// //     constructor(n,i,a,o,s,t){
// //         super(n,i,a)  
// //         this.o=o
// //         this.s=s
// //         this.t=t
// //     }
// //     set1(){
// //         document.write(hi guys)
// //     }

 
// // }

// // class Chil2 extends Chil{

// //     constructor(n,i,a,o,s,t,new1,new2){
// //         super(n,i,a,o,s,t)
// //         this.new_1 = new1
// //         this.new_2 = new2

// //     }

// //     get(){
// //         // document.write(get)
// //         return <br> ${this.n}<br> ${this.i}<br> ${this.a}<br> ${this.o}<br> ${this.s}<br> ${this.t}<br> ${this.new_1}<br> ${this.new_2}

// //     }
// // }

// // let child_2 = new Chil2("Amir","Kani","gopi","ganesh","siva","vivek","Kavin","yuva")
// // document.write(child_2.get())


// // let check = new Chil("kani","Hussain","Mohamed","amir","gopi","ganesh",)
// // check.set1()
// // let accpar = check.set()
// // document.write(accpar)

// //multiple level inheritance

// //hieracal

// class Parent{
//     constructor(fname,age){
//         this.fname = fname;
//         this.age = age;
//     }
// }

// class Child1 extends Parent {
//     constructor(fname,age,id,roll){
//         super(fname,age)
//         this.id = id;
//         this.roll = roll;
//     }

//     get1(){
//         return `<br> Name : ${this.fname} <br> age : ${this.age} <br> Id : ${this.id} <br> Roll No : ${this.roll}`
//     }
// }

// class Child2 extends Parent {
//     constructor(fname,age,result,std){
//         super(fname,age)
//         this.result = result;
//         this.class = std;
//     }

//     get2(){
//         return `<br> Name : ${this.fname} <br> age : ${this.age} <br> Result : ${this.result} <br> Class : ${this.class}`
//     }
// }

// class Child3 extends Child1{
//     z
// }
// let chil_1 = new Child1("Kani",22,"jan",4040)
// document.write(chil_1.get1())

// let chil_2 = new Child2("Kani",22,"Pass","Morning")
// document.write(chil_2.get2())

class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this._accountNumber = accountNumber;
        this._accountHolderName = accountHolderName;
        this._balance = balance;
    }
 
    showAccountDetails() {
        console.log(`Account Number: ${this._accountNumber}`);
        console.log(`Account Holder Name: ${this._accountHolderName}`);
        console.log(`Balance: ${this._balance}`);
    }
 
    deposit(amount) {
        this._balance += amount;
        this.showAccountDetails();
    }
 
    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            this.showAccountDetails();
        } else {
            console.log("Insufficient Balance");
        }
    }
}
 
let myBankAccount = new BankAccount("123456", "John Doe", 1000);
myBankAccount.deposit(500);