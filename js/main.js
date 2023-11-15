import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js"

const toDoList = new ToDoList ();

// Launching the app 
document.addEventListener("readystatechange", (event)=>{
     if (event.target.readyState === "complete") {
          initApp();
     }
});

const initApp =  ( ) =>{



     //Refresh Page
     refreshPage();
}

const refreshPage = ()=>{
     clearListDisplay();
}

const clearListDisplay = ()=>{
     const parentElement = document.getElementById("listItems");
     deleteContents(parentElement);
}

const deleteContents = (parentElement) =>{
     let child = parentElement.lastChildElementChild;
     while (child) {
          parentElement.removeChild(child);
          child = parentElement.lastChildElementChild;
     }
}