import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ReactStars from 'react-stars'

function AddMovies({addNewMovie}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName]=useState("")
  const [date,setDate]=useState("")
  const[image,setImage]=useState("")
  const[season,setSeason]=useState("")
  const[description,setDescription]=useState("")
  const[type,setType]=useState("")
  const[rating,setRating]=useState("")
 
  const handleSubmit=()=>{
    let newMovie={
      name,
      description,
      date,
      type,
      image,
      rating,
    };
    addNewMovie(newMovie);
    handleClose(true)
    setName("")
    setDate("")
    setDescription("")
    setType("")
    setImage("")
    setRating("")
    setSeason("")


  };

  

   
return (
  
    <>
      <Button style={{backgroundColor:'#F9B572',fontWeight:'bold',color:'#116A7B' }} variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
      
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:"#F9B572",color:'#3A4D39',fontWeight:'bold'}} >
          <Modal.Title> Movie To Add </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#FBECB2",color:'#1F1717'}} >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label> Movie Poster </Form.Label>
              <Form.Control
                type="url" 
                onChange={(e)=>setImage(e.target.value)}
                value={image}
                placeholder="Tape your Movie's Poster"
                autoFocus
              /><br></br>
               <Form.Label> Movie Rating</Form.Label>
              <Form.Control
                type="number"
                onChange={(e)=>setRating(e.target.value)}
                value={rating}
                placeholder="Tape your Movie's Rating"
                autoFocus
              /><br></br>
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder="Tape your Movie's Name"
                autoFocus
              /><br></br>
               <Form.Label>Movie date</Form.Label>
              <Form.Control
                type="number"
                onChange={(e)=>setDate(e.target.value)}
                value={date}
                placeholder="Tape your Movie's Date"
                autoFocus
              /><br></br>
              <Form.Label>Movie Type</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setType(e.target.value)}
                value={type}
                placeholder="Tape your Movie's Type"
                autoFocus
              /><br></br>
               <Form.Label>Number of Seasons</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setSeason(e.target.value)}
                value={season}
                placeholder="Tape your Movie's season"
                autoFocus
              /><br></br>
               <Form.Label> Movie Descriptions</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
                placeholder="Tape your Movie's Description"
                autoFocus
              />
              
               
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"#F9B572",color:'#3A4D39',fontWeight:'bold'}} variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
);
}
 


  
 

export default AddMovies