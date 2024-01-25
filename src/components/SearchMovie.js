import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SearchMovie({ nameSearch, ratingSearch, setNameSearch, setRatingSearch }) {
  const [localName, setLocalName] = useState(nameSearch);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [localRating, setLocalRating] = useState(ratingSearch);

  const handleSearch = () => {
    // Mettez à jour les états globaux avec les valeurs locales lors de la recherche
    setNameSearch(localName);
    setRatingSearch(localRating);

    // Fermez la modal
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: '15px',backgroundColor:'#F9B572',color:'#116A7B',fontWeight:'bold' }}>
        Search Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"#F9B572",color:'#3A4D39',fontWeight:'bold'}}>
          <Modal.Title>Movie To Search</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#FBECB2",color:'#1F1717'}}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Rating</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLocalRating(e.target.value)}
                value={localRating}
                placeholder="Type your Movie's Rating"
                autoFocus
              />
              <br />
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLocalName(e.target.value)}
                value={localName}
                placeholder="Type your Movie's Name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"#F9B572",color:'#3A4D39',fontWeight:'bold'}} variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchMovie;
