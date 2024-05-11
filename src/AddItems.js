import React from 'react';
import "./index.css";
import { IoIosAddCircle } from "react-icons/io";



const AddItems = ({newItem,setNewItem,handleSubmit}) =>{
    return(
        <form action="" className='addForm' onSubmit={handleSubmit}>
            <input 
                type="text"
                autoFocus
                placeholder='Add Item'
                required
                id = "addItem"
                className='inputArea'

                value = {newItem}
                onChange = {(e)=>{setNewItem(e.target.value)}}
             />
  
            <button>
                <IoIosAddCircle 
                    className = "addIcon"
                />
            </button>
        </form>

    )
}


export default AddItems;