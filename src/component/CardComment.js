import React from 'react'
import {Card}from 'react-bootstrap'


const CardComment = ({comment}) => {
    return (
        <div>
            <Card style={{ width: '55rem' , height:'150px', marginBottom: '10px' }}>
                <Card.Body>
                    <Card.Title>{comment.name}</Card.Title>
                   
                    <Card.Text>{comment.body}</Card.Text>
                    
                 </Card.Body>
                 

                 
             </Card>
            
        </div>
    )
}

export default CardComment
