import React from "react"
import {AiOutlineDelete} from "react-icons/ai"
import {BsCheckLg} from "react-icons/bs"

export default function Todo(props){
    
    return(
        <div>
            <div>
               <h3>{props.title}</h3>
               <p>{props.description}</p>
            </div>
            <div>
                <AiOutlineDelete />
                <BsCheckLg />
            </div>
        </div>
        

    )
}