import React from 'react'
import LineItems from './LineItems';

const ItemsList = ({data,handleClick,handleDelete}) =>{
    const ulStyles = {
        marginBottom : "10vh"
    }

    return(
        <ul style = {ulStyles}>
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