import React from 'react'
import LineItems from './LineItems';

const ItemsList = ({data,handleClick,handleDelete}) =>{
    return(
        <ul>
            {
                data.map((item)=>(
                    <LineItems
                        key = {item.id}
                        item = {item}
                        handleClick = {handleClick}
                        handleDelete = {handleDelete}
                     />
                ))
            }
        </ul>
    )
}



export default ItemsList;