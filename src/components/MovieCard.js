import React from 'react'
import {Card,ListGroup} from 'react-bootstrap'
import ReactStars from 'react-stars'

function MovieCard({movie}) {
  const { name, description, image, rating,date } = movie;
  
  return (
    <div>


<Card style={{ border:'solid 1px',marginBottom:'20px',borderRadius:'15px',width: '30rem',marginLeft:'10px' }}>
      <Card.Img width={100} height={300} variant="top" src={image}/>
      <Card.Body>
        <Card.Title style={{backgroundColor:'#F9E8D9'}} >{name}</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{backgroundColor:'#C69774'}}>{date}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'#5F8670',fontWeight:'bold    ',color:"gold"}}>{rating}</ListGroup.Item> 
        <ListGroup.Item style={{backgroundColor:'#113946',color:'white'}}>{description}</ListGroup.Item>
      </ListGroup>
      
      <ReactStars 
    
    count={5}
    seize={15}
    activeColor='#ffd700'
    value={movie.rating}
    edit={false}/>
    </Card>
    



    </div>
  )
}

export default MovieCard