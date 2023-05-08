import React from "react"
import {AiOutlineDelete} from "react-icons/ai"
import {BsCheckLg} from "react-icons/bs"
import "./Todo.css"
import Completed from "./Completed"

export default function Todo(props){

    const [completed, setCompleted]= React.useState([])

    const deletedItem= (index)=>{
        const updatedTodo= [...props.todoArr]
        updatedTodo.splice(index, 1)
        props.setTodoArr(updatedTodo)
        localStorage.setItem("Tasks", JSON.stringify(updatedTodo))
    }

    const completedItem=(index)=>{
        const completedArr= [...completed]
        completedArr.push(props.todoArr[index])
        deletedItem(index)
        setCompleted(completedArr)
        localStorage.setItem("completedTasks", JSON.stringify(completedArr))
    }

    React.useEffect(()=>{
          let savedCompletedTodos= JSON.parse(localStorage.getItem("completedTasks"))
          if(savedCompletedTodos){
             setCompleted(savedCompletedTodos)
          }
          }, [])

    const todoCompleted= (completed).map((eachItem,index)=>{
        return(<Completed id={index}
                          key= {index}
                          title={eachItem.title}
                          description={eachItem.description}
                          completed={completed}
                          setCompleted={setCompleted} />)})
    return(
        <div >
            {props.display===true && <div className= "item-delete-check"><div className="item">
               <h3>{props.title}</h3>
               <p>{props.description}</p>
            </div>
            <div className="delete-check">
                <AiOutlineDelete className="delete" onClick={()=>deletedItem(props.id)}/>
                <BsCheckLg className="check" onClick={()=>completedItem(props.id)}/>
            </div> </div>}
            {props.display===false && todoCompleted}
                                                              
        </div>
        

    )
}