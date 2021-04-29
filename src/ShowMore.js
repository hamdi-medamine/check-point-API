import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {useState} from 'react'

function Profile({el}) {
          const [show, setShow] = useState(false);

          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);

  return (
    <>
     <Button onClick={handleShow} variant="primary" size="lg" active>
                      
   More info
  </Button>{' '}

      <Modal className= "modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{el.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <h5>Adresse:</h5>
                 
                    <p>{el.address.street}, {el.address.suite}, {el.address.city}</p>
        <h5 >Company :</h5>
      
        <p> {el.company.name}, {el.company.catchPhrase}, {el.company.bs}</p>
        <h5>Website:</h5>
        <p>{el.website} </p>
        
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Profile
