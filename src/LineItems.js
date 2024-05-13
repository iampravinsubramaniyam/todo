import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import "./index.css"



const LineItems = ({item,handleClick,handleDelete}) =>{
    const listStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 20px",
        width: "350px",
        height: "70px",
        backgroundColor: "lightblue",
    };

    const inputStyles = {
        width: "30px",
        height: "30px",
        cursor: "pointer",
    }


    const deleteList = {
        cursor: "pointer",
    };



    return(
        <li style = {listStyles}>
            <input
                type="checkbox" 
                checked = {item.checked} 
                style = {inputStyles}
                onChange={()=>{
                    handleClick(item.id);
                }}
            />

            <div 
                style = {item.checked?{textDecoration:"line-through"}: {textDecoration :"none"}}
                onDoubleClick={()=>{
                    handleClick(item.id);
                }}
                >
                {item.content}
            </div>  

            <FaTrashAlt 
                tabIndex = "0" 
                style = {deleteList}
                className = "deleteIcon"
                onClick={()=>{
                    handleDelete(item.id);
                    }
                }
                aria-label = {`Delete ${item}`}
            />
  
        </li>   
    )

}


export default LineItems;