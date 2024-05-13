import React from 'react';
import "./index.css";
import ItemsList from './ItemsList.js';


const Content = ({data,handleClick,handleDelete,checkItems}) =>{
//rendering

    return(
   
        <>
            {(data.length)?(
                <ItemsList 
                    data = {data}
                    handleClick = {handleClick}
                    handleDelete = {handleDelete}
                />
                ):(
                    <p>{checkItems?"No Items":""}</p>
                )
            }
        </>
    )
}


export default Content;