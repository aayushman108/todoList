import React from "react"
import "./App.css"
import Todo from "./Todo"

export default function App(){
    const [newTitle, setNewTitle]= React.useState("")
    const [newDescription, setNewDescription]= React.useState("")
    const [todoArray, setTodoArray]= React.useState([])
    const [display, setDisplay]= React.useState(true)
    
    const addTodo = ()=>{
        const newItem={
            title: newTitle,
            description: newDescription
        }
        const updatedTodo= [...todoArray]
        updatedTodo.push(newItem)
        setTodoArray(updatedTodo)
        localStorage.setItem("Tasks", JSON.stringify(updatedTodo))
    }

    React.useEffect(()=>{
        let savedTodos= JSON.parse(localStorage.getItem("Tasks"))
        if (savedTodos){
            setTodoArray(savedTodos)
        }
        }, [])

    const todoList= todoArray.map((eachItemm, index)=>{return(
        <Todo  id= {index}
            key= {index}
            title= {eachItemm.title}
            description= {eachItemm.description}
            todoArr= {todoArray}
            setTodoArr={setTodoArray}
            display={display}
            />
    )})

    return(
        <div className="todo-app">
            <div className="todo-input">
                <div className="todo todo-title">
                   <label htmlFor="title">Title</label>
                   <input type="text" id="title" value={newTitle}  placeholder="Give title" onChange={(e)=>setNewTitle(e.target.value)} />
                </div>
                <div className="todo todo-description">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={newDescription} id="description" placeholder="Add description" onChange={(e)=>setNewDescription(e.target.value)} />
                </div>
                <button className="todo-add" onClick={addTodo}>Add</button>
            </div>
            <div className="todo-switch">
                <button className={`todo-button ${display===true && "active"}`} onClick={()=>setDisplay(true)}>Todo</button>
                <button className={`completed-button ${display===false && "active"}`} onClick={()=>setDisplay(false)}>Completed</button>
            </div>
            <div>
                {todoList}
            </div>
        </div>
    )
}