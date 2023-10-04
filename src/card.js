

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';




 function Cardcomp(props){
 let [show, setShow] = useState(false);
  function handleshow () {
    setShow(! show )
  }
    return( 
      <>  
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src= {props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary"onClick={handleshow}>Show Detalis</Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleshow}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.description}  <br /> <b>price : {props.price}100$</b> </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleshow}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </>   

    );
    
}

export default Cardcomp;