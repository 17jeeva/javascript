let form = document.getElementById("form")
let textInput = document.getElementById("textInput")
let dateInput = document.getElementById("dateInput")
let textarea = document.getElementById("textarea")
let msg = document.getElementById("msg")
let add = document.getElementById("add")
let task = document.getElementById("tasks")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formvalidation();
})
let formvalidation = ()=>{
    if(textInput.value==""){
        msg.innerHTML = "Form cannot be blank"
    }
    else{
        msg.innerHTML = ""
        acceptdata()
        add.setAttribute("data-bs-dismiss","modal");
        add.click();
        (()=>{
            add.setAttribute("data-bs-dismiss","")
        })
        ();
    }
    
}

let data = [];
let acceptdata = ()=>{
    data.push({
        text : textInput.value,
        date : dateInput.value,
        description : textarea.value 
    })
    localStorage.clear()
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data)
    createTasks()
    // (()=>{
    //     data=JSON.parse(localStorage.getItem("data"))||[]
    //     console.log(data)
    //     createTasks()
    // })
    // ();
}
let createTasks = () => {
    task.innerHTML = "";
    data.map((x, y) => {
      return (task.innerHTML += `
      <div id=${y}>
            <span class="fw-bold">${x.text}</span>
            <span class="small text-secondary">${x.date}</span>
            <p>${x.description}</p>
    
            <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
              <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </span>
          </div>
      `);
    });
  
     resetForm();
  };
  let resetForm=()=>{
    textInput.value=""
    dateInput.value=""
    textarea.value=""
  }
  (()=>{
    data=JSON.parse(localStorage.getItem("data"))||[]
    console.log(data)
    createTasks()
})
();
  let deleteTask=(e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1)
    localStorage.setItem("data",JSON.stringify(data))
    console.log(data)

  }
  let editTask=(e)=>{
    let ar=e.parentElement.parentElement
    textInput.value=ar.children[0].innerHTML
    dateInput.value=ar.children[1].innerHTML
    textarea.value=ar.children[2].innerHTML
    deleteTask(e)
    // e.parentElement.parentElement.remove();
    // ar.remove()

  }
// localStorage.clear()