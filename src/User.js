import React from 'react'
import {Card,Button} from 'react-bootstrap'
import ShowMore from './ShowMore'

export default function User({el}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.hpsystems.com.tr/tema/genel/uploads/ekibimiz/vote_1.png" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
    <h6> username: {el.username} </h6>
    <h6> email: {el.email} </h6>
    <h6> phone: {el.phone} </h6>
    
    </Card.Text>
    <ShowMore el={el}/>
  </Card.Body>
</Card>
        </div>
    )
}


