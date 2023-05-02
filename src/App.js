import React from "react"
import "./App.css"
import Todo from "./Todo"
import Completed from "./Completed"

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
        localStorage.setItem("storeItem", JSON.stringify(updatedTodo))
        
    }

    return(
        <div className="todo-app">
            <div className="todo-input">
                <input className="todo-title" value={newTitle} type="text" placeholder="Give title" onChange={(e)=>setNewTitle(e.target.value)} />
                <input className="todo-description" value={newDescription} type="text" placeholder="Add description" onChange={(e)=>setNewDescription(e.target.value)} />
                <button className="todo-add" onClick={addTodo}>Add</button>
            </div>
            <div className="todo-switch">
                <button className="todo-button" onClick={()=>setDisplay(true)}>Todo</button>
                <button className="completed-button" onClick={()=>setDisplay(false)}>Completed</button>
            </div>
            <div>
                {display===true && todoArray.map(eachItem=>{
                return(<Todo title= {eachItem.title}
                description= {eachItem.description} />)
                })}
                
                {display===false && todoArray.map(eachItem=>{
                return(<Completed title= {eachItem.title}
                description= {eachItem.description} />)
                })}
            </div>
        </div>
    )
}