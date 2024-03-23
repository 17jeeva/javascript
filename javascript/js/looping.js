// while(condition){
//     statement;
//     increment or decrement
// } while syntax..

// let synt = "Bootstrap Ganesh"
// let i = 10
// while(i>=0)  //1<=5  // 2<=5  //3<=5 //4<=5 //5<=5 //6<=5
// {
  
//     document.write(`<br> ${i}`); //1 2 3 4 5
//     //i++;//i++  i+1  1+1 = i=2  // i=3 // i=4  //i=5  //i=6
//     i--
// }00
// let j=10

// do{
//         document.write(`<br>${j}=${synt}`)
//         j--;
// }while(j>=0);

// if (5>10){
//     document.write("5 is greater")
// }
// else{
//     document.write("10 is greater")
// }
// (5>10)?document.write("5 is greater"):(10<=20)?document.write("20 is greater"):document.write("10 is greater") // terinary operator..
// for(initialisation;condition;increment or decrement){
//     statement
// }Syntax
// for(k=100;k>=1;k--){
//     // document.write(`<br>${k}=Hello`)
//     if(k%2==0){
//         document.write(`<br>${k}`)
//     }
// }
let arr = ["Arun","Vishnu","Ganesh","Thilak","Gopi"]
// document.write(`arr[0]=${arr[0]}`)
// for(k=0;k<arr.length;k++){
//     document.write(`<br>${arr[k]}`)
// }
// for(i in arr){
//     document.write(`<br>${arr[i]}`)
// }
// for(p of arr){
//    document.write(`<br>${p}`) 
// }
// arr.forEach((a)=>{
//     document.write(`<br>${a}`)
// })
// let arraymap = arr.map((b)=>{
//     return(`<br>${b}`)
// }).join("")
// document.write(`5`)
// document.write(`<br>${arraymap}`)

// var ary = (a,b)=>{
//     return(`<br>${a+b}`)
// }
// document.write(`<br>${ary(999999998,999999999)}`)

// let arry = {
//     name:"amir",dob:"15-09-1997",department:"Developer"
// }
// document.write(`<br>${arry["name"]}`)
// for(i in arry){
//     document.write(`<br>${arry[i]}`)
// }

// for(p of arry){
//     document.write(`<br>${p}`) 
// }
let a=[
{fullName:"Amir",designation:"Developer",company:"Why Global Services",salary:"500000",image:"images/student1.jpg",hobbies:["sports","watching videos","reading books"],
address:{doorno : 2,flatno : 2,floorno : 1,street : "Model School Road",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Vadivelu")}},
{fullName:"Ganesh",designation:"CEO",company:"Why Global Services",salary:"5000",image:"images/student2.jpg",hobbies:["sports","watching videos","reading books"],
address:{doorno : 2,flatno : 2,floorno : 1,street : "Model School Road",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Vivek")}},
{fullName:"Hussain Kani",designation:"Chief Engineer",company:"Vasant & Co",salary:"5600",image:"images/student3.jpg",hobbies:["sports","watching videos","reading books"],
address:{doorno : 5,flatno : 5,floorno : 2,street : "Aziz Mulk Street",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Ajith")}},
{fullName:"Gopi",designation:"Digital Marketing",company:"Sun Microsystems",salary:"1500",image:"images/samsung.jpg",hobbies:["sports","watching videos","reading books"],
address:{doorno : 2,flatno : 2,floorno : 1,street : "Model School Road",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Surya")}},
{fullName:"Siva",designation:"Tester",company:"IBM",salary:"15000",image:"images/pixel 8.jpg",hobbies:["sports","watching videos","reading books"],
address:{doorno : 5,flatno : 4,floorno : 3,street : "Gulam Abbas Street",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Vijay")}}
]
document.getElementById("student").addEventListener('click',()=>{
    let arraymap = a.map((a)=>{
        return(`<br><img src="${a.image}" width="100px" height="100px"><br><h1>Fullname : ${a.fullName}</h1><br>designation : ${a.designation} <br>company : ${a.company} 
        <br>salary : ${a.salary} <br>hobbies : ${a.hobbies}<br>address : Doorno: ${a.address.doorno}<br>StreetNo : ${a["address"]["street"]}<br>District: ${a.address.district}<br>Info: ${a.info()}`)
    })
    document.getElementById("dvv").innerHTML = `${arraymap}`
})
document.write(`<br>${a[0].fullName}${a[0].salary}`)
document.getElementById("button1").addEventListener('click',()=>{
    let com  = document.getElementById("select1").value;
    let final = a.filter((why)=>why.company == com);
    let arraymap = final.map((a)=>{
        return(`<br><img src="${a.image}" width="100px" height="100px"><br><h1>Fullname : ${a.fullName}</h1><br>designation : ${a.designation} <br>company : ${a.company} 
        <br>salary : ${a.salary} <br>hobbies : ${a.hobbies}<br>address : Doorno: ${a.address.doorno}<br>StreetNo : ${a["address"]["street"]}<br>District: ${a.address.district}<br>Info: ${a.info()}`)
    })
    document.getElementById("dvv").innerHTML = `${arraymap}`
})

document.getElementById("push-name").addEventListener('click',()=>{
    // console.log("push-name")
    let push1 = {
        fullName:"Vivek",designation:"HR",company:"Why Global Services",salary:"50000",image:"images/student1.jpg",hobbies:["sports","watching videos","reading books"],
        address:{doorno : 4,flatno : 4,floorno : 4,street : "Raja Annamalai Puram",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Vadivelu")},  

    }
    a.push(push1)
    let arraymap = a.map((a)=>{
        return(`<br><img src="${a.image}" width="100px" height="100px"><br><h1>Fullname : ${a.fullName}</h1><br>designation : ${a.designation} <br>company : ${a.company} 
        <br>salary : ${a.salary} <br>hobbies : ${a.hobbies}<br>address : Doorno: ${a.address.doorno}<br>StreetNo : ${a["address"]["street"]}<br>District: ${a.address.district}<br>Info: ${a.info()}`)
    }).join("")
    document.getElementById("dv").innerHTML = `${arraymap}`
})
document.getElementById("button2").addEventListener('click',()=>{
    let unshift1 = {
        fullName:"Aravindh",designation:"HR",company:"Why Global Services",salary:"50000",image:"images/student1.jpg",hobbies:["sports","watching videos","reading books"],
        address:{doorno : 4,flatno : 4,floorno : 4,street : "Beasant Nagar",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Vadivelu")},
    }
    a.unshift(unshift1)
    let arraymap = a.map((a)=>{
        return(`<br><img src="${a.image}" width="100px" height="100px"><br><h1>Fullname : ${a.fullName}</h1><br>designation : ${a.designation} <br>company : ${a.company} 
        <br>salary : ${a.salary} <br>hobbies : ${a.hobbies}<br>address : Doorno: ${a.address.doorno}<br>StreetNo : ${a["address"]["street"]}<br>District: ${a.address.district}<br>Info: ${a.info()}`)
    })
    document.getElementById("dv").innerHTML = `${arraymap}`
})
document.getElementById("button3").addEventListener('click',()=>{
    let splice1 = {
        fullName:"Selvam",designation:"Tester",company:"IBM",salary:"15000",image:"images/pixel 8.jpg",hobbies:["sports","watching videos","reading books"],
address:{doorno : 5,flatno : 4,floorno : 3,street : "Gulam Abbas Street",city:"Chennai",district:"Chennai",state:"TamilNadu",pincode:600006},info:()=>{return("Vijay")}}
    a.splice(3,0,splice1)
    let arraymap = a.map((b)=>{
        return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
        <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
    })
    document.getElementById("dv1").innerHTML = `${arraymap}`
    })

document.getElementById("button4").addEventListener('click',()=>{
    a.pop()
    // console.log(a)
    let arraymap = a.map((b)=>{
        return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
        <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
    })
    document.getElementById("dv2").innerHTML = `${arraymap}`  
})

document.getElementById("button5").addEventListener('click',()=>{
    a.shift()

    let arraymap = a.map((b)=>{
        return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
        <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
    })
    document.getElementById("dv2").innerHTML = `${arraymap}`

})

document.getElementById("button6").addEventListener('click',()=>{
    let search1 = document.getElementById("search1").value
    
    let srch = a.find((t)=>t.fullName == search1)
    if(srch){
        console.log(srch)
        let arraymap = srch.map((b)=>{
            return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
            <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
        })
        document.getElementById("dv4").innerHTML = `${arraymap}` 
    }
    else{
        document.getElementById("dv4").innerHTML = `The person you are looking for is not available` 
    }
})

document.getElementById("button7").addEventListener('click',()=>{
   let findx = a.findIndex((a)=>{
        return(a.salary == 5000)

    })
    
    a[findx].fullName="Gobal"
        // console.log(a[1])
    let findxx = a.map((b)=>{

        return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
        <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
    })
    document.getElementById("dv5").innerHTML = `${findxx}`
})

document.getElementById("button8").addEventListener('click',()=>{
   let final1 = a.map((b)=>{
        if(b.company == "Why GGGlobal Services"){
            (b.salary = 150000)
        }
        else if(b.company == "IBM"){
            (b.salary = 19292)
        }
        return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
        <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
    })
    document.getElementById("dv6").innerHTML = `${final1}`
})

document.getElementById("button9").addEventListener('click',()=>{
    let sort1 = a.sort((a,b)=>{
        return(Number(a.salary) < Number(b.salary))? -1 : 0 ;
        
    })
    console.log(sort1)

    document.getElementById("dv7").innerHTML = a.map((b)=>{

            return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
            <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
        })
        
   
    //document.getElementById("dv7").innerHTML = `${findxx1}`

    })
    let del=()=>{
      let del1=  delete a[2]
    //   console.log(a)
      document.getElementById("dv8").innerHTML=a.map((b)=>{
        return(`<br><img src="${b.image}" width="100px" height="100px"><br><h1>Fullname : ${b.fullName}</h1><br>designation : ${b.designation} <br>company : ${b.company} 
        <br>salary : ${b.salary} <br>hobbies : ${b.hobbies}<br>address : Doorno: ${b.address.doorno}<br>StreetNo : ${b["address"]["street"]}<br>District: ${b.address.district}<br>Info: ${b.info()}`)
    })
    }
    let dynamic=()=>{
        // console.log("hello")
        let from=document.createElement("form") 
        from.setAttribute("method","post")
        from.setAttribute("action","http://127.0.0.1:5501/looping.html")
        from.setAttribute("id","form1")
        from.setAttribute("enctype","multipart/form-data")
        from.setAttribute("submit","")
        let input=document.createElement("input")
        input.setAttribute("type","text")
        input.setAttribute("id","fullName")
        input.setAttribute("placeholder","enter your fullname")
       
        let input1=document.createElement("input")
        input1.setAttribute("type","text")
        input1.setAttribute("id","designation")
        input1.setAttribute("placeholder","enter your designation")
        

        let input2=document.createElement("input")
        input2.setAttribute("type","text")
        input2.setAttribute("id","company")
        input2.setAttribute("placeholder","enter your company")


        let input3=document.createElement("input")
        input3.setAttribute("type","text")
        input3.setAttribute("id","salary")
        input3.setAttribute("placeholder","enter your salary")


        let input4=document.createElement("input")
        input4.setAttribute("type","checkbox")
        input4.setAttribute("id","check")
        input4.setAttribute("name","hobbies[]")
        // let d=document.createTextNode("C")
        // input4.appendChild(d)
        input4.setAttribute("value","sports")


        let input5=document.createElement("input")
        input5.setAttribute("type","checkbox")
        input5.setAttribute("id","check1")
        input5.setAttribute("name","hobbies[]")
        // input5.appendChild(document.createTextNode("watching videos"))
        input5.setAttribute("value","watching videos")


        let input6=document.createElement("input")
        input6.setAttribute("type","submit")
        input6.setAttribute("id","check2")
        input6.setAttribute("onclick","additems()")


        from.appendChild(input)
        from.appendChild(input1)
        from.appendChild(input2)
        from.appendChild(input3)
        from.appendChild(input4)
        from.appendChild(input5)
        from.appendChild(input6)
        console.log("welcome")
        document.getElementById("dv10").innerHTML=""
        console.log(document.getElementById("dv10").appendChild(from))
        // document.body.document.getElementById("dv10").appendChild(from)
        // document.body.appendChild(from)
        let additems=()=>{
            console.log("welcome kani")
        }

        
        
    
    
        
        
       
        
    }

    document.getElementById("findindex").addEventListener('click',()=>{

       let check = a.findIndex((e)=> e.fullName == "Siva")
        document.getElementById("res_findindex").innerHTML = `${check}`
    })

