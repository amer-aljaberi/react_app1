

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';



 function Cardcomp(props){
    let [counter,setcounter] = useState(0)

    function addToFavorites(){
        setcounter(counter+1)
    }
    return(
      
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src= {props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        ★ {counter}

        </Card.Text>
        <Button variant="primary" onClick={addToFavorites}>  Add to favprites </Button>
      </Card.Body>
    </Card>


    );
    
}

export default Cardcomp;