import React from 'react';
import "./index.css";
import ItemsList from './ItemsList.js';


const Content = ({data,handleClick,handleDelete}) =>{
//rendering

    return(
   
        <div className = "content" count = "1">
            {(data.length)?(
                <ItemsList 
                    data = {data}
                    handleClick = {handleClick}
                    handleDelete = {handleDelete}
                />
                ):(
                    <p>List is Empty</p>
                )
            }
        </div>
    )
}


export default Content;