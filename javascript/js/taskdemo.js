let dc1 = document.getElementById("dvv") // Global declaration
var bank = (e)=>{
    // switch (e.target.getAttribute("id")){
    //     case "rdio":
    //         document.getElementById("dv").innerHTML = `20% Discount for Axis Bank`
    //         break;
    //     case "rdio1":
    //         document.getElementById("dv1").innerHTML = `15% Discount for ICICI Bank`
    //         break;
    //     case "rdio2":
    //         document.getElementById("dv2").innerHTML = `10% Discount for HDFC Bank`
    //         break;
    //     default:
    //     document.getElementById("dv3").innerHTML = `you are not choosen the given bank`
    // }
 // Anonymous function
if(e.target.getAttribute("id")=="rdio"){
    document.getElementById("dv").innerHTML = `20% Discount for Axis Bank`
}
else if (e.target.getAttribute("id")=="rdio1"){
    document.getElementById("dv1").innerHTML = `15% Discount for ICICI Bank`
}
else if (e.target.getAttribute("id")=="rdio2"){
    document.getElementById("dv2").innerHTML = `10% Discount for HDFC Bank`
}
else {document.getElementById("dv3").innerHTML = `you are not choosen the given bank`  
}
}