import React from 'react'
import {Card,Button}from 'react-bootstrap'
import {Link} from 'react-router-dom'
import comment from '../assets/comment.jpeg'


const Cardpost = ({post}) => {
    return (
        <div >
            <Card style={{ width: '18rem' , height:'250px', marginBottom:'15px' }}>
                <Card.Body>
                    <Card.Text className="posttitle">{post.title}</Card.Text>
                   
                    <Card.Text className="text">{post.body}</Card.Text>
                    
                 </Card.Body>
                 <Link to={`/Commentaires/${post.id}`} > 
                 <Card.Img variant="top" src={comment} alt="comment-image" style={{width:'50px'}} />
                 </Link>

                 
             </Card>
        </div>
    )
}

export default Cardpost
