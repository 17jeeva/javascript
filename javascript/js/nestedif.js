document.getElementById("bttn").addEventListener("click",()=>{
    let department = document.getElementById("txt").value;
    let experience = 6;
    if(department=="developer"){
        if(experience==5){
            console.log("5000 increment")
        }
        else if(experience==6){
            console.log("15000 increment")
        }
        else if(experience>=10){
            console.log("50000 increment")
        }
        else{
        console.log("Not applicable")
    }
    }
    else{console.log("This is only for developers")}
})
