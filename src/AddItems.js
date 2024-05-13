import React from 'react';
import "./index.css";
import { IoIosAddCircle } from "react-icons/io";
import {useRef} from 'react';



const AddItems = ({newItem,setNewItem,handleSubmit}) =>{
    const focusBack = useRef();
    return(
        <form action="" className='addForm' onSubmit={handleSubmit}>
            <input 
                type="text"
                autoFocus
                placeholder='Add Item'
                required
                id = "addItem"
                className='inputArea'
                ref = {focusBack}

                value = {newItem}
                onChange = {(e)=>{setNewItem(e.target.value)}}
             />
  
            <button
                onClick={()=> focusBack.current.focus()}
            >
                <IoIosAddCircle 
                    className = "addIcon"
                />
            </button>
        </form>

    )
}


export default AddItems;