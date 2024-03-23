// ajax => loading the data from server and selectively updating part of webpages without reloading the whole page
// it is a technology for developing a better faster and interactive web applications using html css and jss xml
// xml is a format to store and transport data from the web server
//asynchronous => the web application could send and receive data from the web server without refreshing the page this background process of sending and receiving the data from the server along with different section of the web page

// XmlHttpRequestObject => to request data from a web server and html dom to display or the use data it is also called as api it is formed an object whose methods helps in transfer of data between web browser and web server.
//HTMLDOM => When an webpage is loaded the browser creates a document object module of the page 

// //syntax
// let obj1 = new XMLHttpRequest()
// Ready state is one of the property of XMLHttpRequest() numbers 0,1,2,3,4 it is an intialization 

// 0=>Request not initialization
// 1=>server connection establish(TLS Handshake)
// 2=>request is received by the server
// 3=>the request is processing
// 4=>request is finished and the response is ready

//ON READY STATE CHANGE => Changing the states
//Status : it is a property of XMLHttpRequest() it return the state number of the request
//200,404,403,400,500,502,405,401,503,504
// methods => Open,Send to send the request to the server

//1st argument => GET OR POST
//2nd argument => File
//3rd argument => Boolean value

let yu = ()=>{
    let obj1 = new XMLHttpRequest();
    obj1.onreadystatechange = function(){
      if(this.readyState==4 && this.status==200){
        document.getElementById("dv").innerHTML = this.responseText
      }
    }
    obj1.open("GET","index.html",true)
    obj1.send()
}