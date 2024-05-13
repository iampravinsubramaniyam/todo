import './App.css';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import AddItems from './AddItems.js';
import SearchItem from './SearchItem.js';
import apiRequest from './apiRequest.js';

import { useState, useEffect } from 'react';


function App() {

    const API_URL = 'http://localhost:3500/items';

    const [data,setData] = useState([]);

    const [newItem,setNewItem] = useState('');
    const [search,setSearch] = useState('');
    const [fetchError,setFetchError] = useState(null);
    const [loading, setLoading] = useState('Loading');
    const [checkItems,setCheckItems] = useState(false);


    /////////////////////////////////    CREATE       /////////////////////////

    const addItem =  async (enteredContent) =>{
        const newID = data.length?data[data.length-1].id+1:1;
        const newItem = {
            id:newID,
            content:enteredContent,
            checked: false
        }

        const oldList = [...data,newItem];
        setData(oldList)

        const post = {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        }


        const result = await apiRequest(API_URL,post)

        if(result){
            setFetchError(result);
        }

        // window.localStorage.setItem("list_items",JSON.stringify(oldList));
    }
 




    //////////////////// UPDATE ///////////////////////////

    const handleClick = async (id) =>{

        const dup = data.map((item) => item.id === id?{
            ...item,
            checked: !item.checked
        }:item)

        // console.log(dup)


        setData(dup);

        const myItem = dup.filter((item)=> item.id === id)


        const updateOption = {
            method : 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({checked:myItem[0].checked})
        }


        const reqUrl = `${API_URL}/${id}`;

        const result = await apiRequest(reqUrl,updateOption);

        if(result){
            setFetchError(result);
        }

        // window.localStorage.setItem("list_items",JSON.stringify(dup));
    }


    //////////////////////////////////         DELETE       ////////////////////////////


    const handleDelete = async (id) =>{
        const dup = data.filter((item) => 
            item.id !== id)

        setData(dup);

        const deleteOptions = {
            method: 'DELETE'
        }

        const reqUrl = `${API_URL}/${id}`

        const result = await apiRequest(reqUrl,deleteOptions);

        if(result){
            alert(result)
            setFetchError(result);
        }
    }


    const handleSubmit = (msg) =>{
        msg.preventDefault();
        console.log("added succesfully");
        setNewItem('');
        addItem(newItem);
    }


    //fetching items from db.json file 
    //using dummy server => npx json-server -p 3500 -w data/db.json



    ////////////////////////////////////   READ       ////////////////////////////////

    useEffect(()=> {
        // setData(JSON.parse(window.localStorage.getItem("list_items")))
        // console.log("hi")

        const fetchItems = async () =>{
            try{
                const response = await fetch(API_URL);
                if(!response.ok){
                    throw Error("Data not Recieved")
                }else{
                    setLoading('')
                    setCheckItems(true);
                };

                const listItems = await response.json();
                setData(listItems);
                setFetchError(null);
                
            }catch(err){
                setLoading('');
                setFetchError(err.message);
            }
        }

        setTimeout(()=>{
            (async () => fetchItems())()
        },1000);

    },[])




    return (
        <div>
            <Header 
                title = "todo list"
            />

            <AddItems 
                newItem = {newItem}
                setNewItem = {setNewItem}
                handleSubmit = {handleSubmit}
            />

            <SearchItem
                search = {search}
                setSearch  = {setSearch}
            />

            <main>
                {fetchError && <p>{`Error : ${fetchError}`}</p>}
                <p>{loading}</p>

                <Content
                    data  = {data.filter(data => ((data.content).toLowerCase()).includes(search.toLowerCase()))}
                    handleClick = {handleClick}
                    handleDelete = {handleDelete}
                    checkItems = {checkItems}
                />
            </main>

            <Footer count = {data.length}/>

        </div>
    );
}

export default App;
