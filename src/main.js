//
import data from './data.json'
import Cardcomp from './card';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './main.css';


function Main(){
    let [items,setItems] = useState([]);

    async function getData(){

        const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fc9c3400f2mshf2b3d9dc3e3f2a4p18866fjsne6660623c0b3',
                'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setItems(result.results);
        } catch (error) {
            console.error(error);
        }
  
}

useEffect (function(){getData()},[]) 

    // function handeleSubmit (event){
    //     event.preventDefault()
    //     let searchedvalue = event.target.search.value;
        
    //     let filteredItems =data.filter(function(item){return item.title.toLocaleLowerCase().includes (searchedvalue.toLocaleLowerCase()) })
    //     setItems(filteredItems);
    // }    
    return(
        <>
  <Form className="d-flex"   id='one'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             name ='search'
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>

<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"4%", marginLeft:"10px", marginRight:"10px"}}>
     {items.map(function(item){
return(
    <Cardcomp image={item.images[0].baseUrl} title ={item.name}  price={item.price.value}/>

    
   )
     }
    )
     }
     </div>
            </>
    );
}

export default Main;








