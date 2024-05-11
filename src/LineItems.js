import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import "./index.css"



const LineItems = ({item,handleClick,handleDelete}) =>{
    const listStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "400px",
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
                checked = {item.confirmed} 
                style = {inputStyles}
                onChange={()=>{
                    handleClick(item.id);
                }}
            />

            <div 
                style = {item.strike}
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