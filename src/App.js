import './App.css';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import AddItems from './AddItems.js';
import { useState } from 'react';


function App() {

    const [data,setData] = useState([]);

    const [newItem,setNewItem] = useState('');

    const addItem = (enteredContent) =>{
        const newID = data.length?data[data.length-1].id+1:1;
        const newItem = {
            id:newID,
            content:enteredContent,
            confirmed: false,
            strike:{
                textDecoration: ""
             }
        }

        console.log(newID);

        const oldList = [...data,newItem];
        setData(oldList)
    }

    const handleClick = (key) =>{

        const dup = data.map((item) => item.id === key?{
            ...item,
            confirmed: !item.confirmed,
            strike: !item.confirmed?{
                textDecoration:"line-through",
            }:{
                textDecoration:"",
            }
        }:item)


        setData(dup);
    }



    const handleDelete = (id) =>{
        const dup = data.filter((item) => 
            item.id !== id)

        setData(dup);
        
    }


    const handleSubmit = (msg) =>{
        msg.preventDefault();
        console.log("added succesfully");
        setNewItem('');
        addItem(newItem);
    }




    return (
        <main>
            <Header 
                title = "todo list"
            />
            <AddItems 
                newItem = {newItem}
                setNewItem = {setNewItem}
                handleSubmit = {handleSubmit}
            />
            <Content
                data  = {data}
                handleClick = {handleClick}
                handleDelete = {handleDelete}
            />
            <Footer count = {data.length}/>
        </main>
    );
}

export default App;
