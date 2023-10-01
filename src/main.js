//
import data from './data.json'
import Cardcomp from './card';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './main.css';


function Main(){
    let [items,setItems] = useState(data);


    function handeleSubmit (event){
        event.preventDefault()
        let searchedvalue = event.target.search.value;
        
        let filteredItems =data.filter(function(item){return item.title.toLocaleLowerCase().includes (searchedvalue.toLocaleLowerCase()) })
        setItems(filteredItems);
    }    
    return(
        <>
  <Form className="d-flex"  onSubmit={handeleSubmit} id='one'>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>

<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"4%", marginLeft:"10px", marginRight:"10px"}}>
     {items.map(function(item){
return(
    <Cardcomp image={item.image_url} title ={item.title} description={item.description} price={item.price}/>

    
   )
     }
    )
     }
     </div>
            </>
    );
}

export default Main;