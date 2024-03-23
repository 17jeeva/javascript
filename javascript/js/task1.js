let productt = document.getElementById("select1");
let pricee = document.getElementById("price1");
// var found = ()=>{} // choose anything
function fn1() { // choose anything
    if (productt.value === "001" && pricee.value >= 10000) {
        document.getElementById('ptinfo').innerHTML = `Offer available for ${productt.options[productt.selectedIndex].text} + 10% discount`;
    } 
    else if(productt.value === "002" && pricee.value >= 10000) {
        document.getElementById('ptinfo').innerHTML = `Offer available for ${productt.options[productt.selectedIndex].text} + 9% discount`;
    }
    else if(productt.value === "003" && pricee.value >= 10000) {
            document.getElementById('ptinfo').innerHTML = `Offer available for ${productt.options[productt.selectedIndex].text} + 8% discount`;
    }
    else if(productt.value === "004" && pricee.value >= 10000) {
                document.getElementById('ptinfo').innerHTML = `Offer available for ${productt.options[productt.selectedIndex].text} + 7% discount`;
    }
    else if(productt.value === "005" && pricee.value >= 10000) {
                    document.getElementById('ptinfo').innerHTML = `Offer available for ${productt.options[productt.selectedIndex].text} + 6% discount`;
    }
    else if(productt.value === "005" && pricee.value <= 10000) {
        document.getElementById('ptinfo').innerHTML = `Offer not available for ${productt.options[productt.selectedIndex].text}`;
}
else if(productt.value === "004" && pricee.value <= 10000) {
    document.getElementById('ptinfo').innerHTML = `Offer not available for ${productt.options[productt.selectedIndex].text}`;
}
else if(productt.value === "003" && pricee.value <= 10000) {
    document.getElementById('ptinfo').innerHTML = `Offer not available for ${productt.options[productt.selectedIndex].text}`;
}
else if(productt.value === "002" && pricee.value <= 10000) {
    document.getElementById('ptinfo').innerHTML = `Offer not available for ${productt.options[productt.selectedIndex].text}`;
}
else if(productt.value === "001" && pricee.value <= 10000) {
    document.getElementById('ptinfo').innerHTML = `Offer not available for ${productt.options[productt.selectedIndex].text}`;
}
    else {
        document.getElementById('ptinfo').innerHTML=`Thank you for visiting us`
    } 

}
