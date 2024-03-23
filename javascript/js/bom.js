// window.console.log("Hi everone");
// window.document.write("Hi Gopi");
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// window.confirm("Are you ok")

// document.getElementById("btn").addEventListener('click',()=>{
//    let win =  window.open("https://web.skype.com/??action=joinmeetnow&correlationId=118eb47d-7702-41e2-9b8e-3ee6211154db&source=NewJoinLinkFlow",height="700",width="500").moveTo(500,700)
    
//    setTimeout(()=>{
//         // win.resizeBy(300,200);
//         // win.close()
//         win.moveBy(100,200)
//     },3000)
//      let int = setInterval(()=>{

//       document.write("Thank you for waiting")
//     },3500)
//     clearTimeout(int)
// })

// document.getElementById("add").addEventListener('click',()=>{
    // setInterval(()=>{
    //     let a= 10, b=20;
    //     c = a+ b
    //     document.write(c)
    // },3000)
// })
// console.log("AvailHeight",screen.availHeight)
// console.log("availWidth",screen.availWidth)

// console.log("colorDepth",screen.colorDepth)
// console.log("Height",screen.height)
// console.log("Width",screen.width)

// console.log("Orientation",screen.orientation)

// console.log("pixeldepth",screen.pixelDepth)

// console.log("hash",location.hash)
// console.log("host",location.host)
// console.log("hostname",location.hostname)
// console.log("href",location.href)
// console.log("origin",location.origin)
// console.log("pathname",location.pathname)
// console.log("port",location.port)

// let gool = document.getElementById("gool")
// document.getElementById("res").innerHTML = location.pathname
// console.log(location.path)

// document.getElementById("new_para").addEventListener('click',()=>{
//     // location.assign("https://www.google.com/")
//     location.reload()

// })
// location.reload()
// location.replace("https://www.google.com/")

// document.getElementById("back_btn").addEventListener('click',()=>{
//     history.back()
// })
// document.getElementById("back1_btn").addEventListener('click',()=>{
//     history.back()
// })
// document.getElementById("for_btn").addEventListener('click',()=>{
//     history.forward()
// })
// document.getElementById("for1_btn").addEventListener('click',()=>{
//     history.forward()
// })

//Navigator

// console.log("language",navigator.language)
// console.log("languages",navigator.languages)
// console.log("userAgent",navigator.userAgent)
// console.log("geolocation",navigator.geolocation)
// console.log("clipboard",navigator.clipboard)
// console.log("credentials",navigator.credentials)
// console.log("hardwareConcurrency",navigator.hardwareConcurrency)
// console.log("locks",navigator.locks)
// console.log("Cookies",navigator.cookieEnabled)

document.getElementById("sub_btn").addEventListener('click',()=>{
    if(document.new_form.fname.value == ""){
        alert("Should Enter name")
        return
    }

   let esp =  escape(document.new_form.fname.value)+";"
   document.cookie = "Name = " + esp      
   document.cookie = "Age = true; max-age = 10; "  
   document.cookie = "Address = true; expires = sunday,10 march 2024 12:10:15 GMT; path = desktop" 

   console.log(esp)
})

// types of propagation => bubbling, capturing.
// top to bottom (capturing)
// bottom to top (bubbling) => Default propagation.




















