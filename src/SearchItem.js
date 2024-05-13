import React from 'react';
import "./index.css";
import { FaSearch } from "react-icons/fa";

const SearchItem = ({search,setSearch}) =>{
    return(
        <form action="" className = "searchItem" onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <label htmlFor="search">Search</label>

            <input
                type="text"
                className='inputArea'
                placeholder = "Search Items"
                id = "search"
                role = 'searchbox'
                value = {search}
                onChange = {(e)=> setSearch(e.target.value)}
            />

        </form>
    );
}


export default SearchItem ;