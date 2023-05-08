import React from "react"
import {AiOutlineDelete} from "react-icons/ai"

export default function Completed(props){

    const deleteTheCompleted= (index)=>{
        const updateComplete= [...props.completed]
        updateComplete.splice(index,1)
        props.setCompleted(updateComplete)
        localStorage.setItem("deletedTasks", JSON.stringify(updateComplete))
    }
    return(
        <div className= "item-delete-check">
            <div className="item">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            
            <div>
                <AiOutlineDelete className="delete" onClick={()=>deleteTheCompleted(props.id)}/> 
            </div>
           
         </div>
        
    )
}
