import { fetchJSON } from "./functions/api.js"
import { createElelement } from "./functions/dom.js"
import { TodoList } from "./Components/TodoList.js"

let token = localStorage.getItem("token")
let userid = localStorage.getItem("userid")
/*
if(userid === undefined || userid === null|| token === undefined || token === null){
    window.location.href = "pages/login.html"
} else {*/
try{
    const todos = await fetchJSON(`https://anatide.ulrichanani.com/api/get-todo/${userid}`)
    
    const list = new TodoList(todos)
    
    list.appendTo(document.querySelector('#todolist'))
} catch (error){
    
    console.log(error)
    const alertElement = createElelement("div",
        {
        class: "alert alert-danger m-2",
        role: "alert"
        })
    alertElement.innerText = "Impossibl de charger les todos"
    document.body.prepend(alertElement)
}
//}
