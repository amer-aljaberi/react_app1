import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cardcomp from './card';
import './main.css';


 function Main() {
        const [items, setItems] = useState([]);

    async function getData(){

        const url = 'https://the-cocktail-db3.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fc9c3400f2mshf2b3d9dc3e3f2a4p18866fjsne6660623c0b3',
                'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setItems(result)
        } catch (error) {
            console.error(error);
        }
        }

useEffect (function(){getData()},[]) 

    return(
        <>
  <Form className="d-flex"  id='one'>
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
            <>
    <Cardcomp image={item.image} title ={item.title}  d={item.difficulty} id={item.id} />
    </>
   )
     }
    )
     }
     </div>
            </>
    );
}

export default Main;



