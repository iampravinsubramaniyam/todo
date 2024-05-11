import './App.css';
import Content from './Content.js';
import Header from './Header.js';
import Footer from './Footer.js';
import { useState } from 'react';


function App() {

  const [data,setData] = useState(
      [
        {
            id : 1,
            content:"coding",
            confirmed: false,
            strike:{
                textDecoration: ""
            }
        },
        {
            id:2,
            content:"Outing",
            confirmed: false,
            strike:{
                textDecoration: ""
            }
        },
        {
            id:3,
            content:"Play pubg",
            confirmed: false,
            strike:{
                textDecoration: ""
            }
        },
        {
            id:4,
            content:"photoshoot",
            confirmed: false,
            strike:{
                textDecoration: ""
            }        
        }
  ]);

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


  return (
    <main>
          <Header title = "todo list"/>
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
