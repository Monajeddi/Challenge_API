import React  from 'react'
// import {useState,useEffect} from 'react'
// import axios from 'axios'
import{Card,Button}from 'react-bootstrap'
import {Link} from 'react-router-dom'
import userimg from '../assets/userimg.png'

const CardUser = ({user,match}) => {
    // const [post, setPost] = useState([])

    // const getuser=()=>{
    //     // const url=`https://jsonplaceholder.typicode.com/users/${match.params.id}`
    //     const url =`https://jsonplaceholder.typicode.com/posts/?userId=${match.params.id}`
    //     axios.get(url)
    //     .then(response => response.data)
    //     .then(resData => setPost(resData))
    // }
    // useEffect(() => {
    //     getuser()
        
    // }, [])

   
    return (
        <div >
            <div className="Cards">
                
            <Card style={{ width: '18rem' , height:'210px' ,paddingBottom:'10px'}}>
            <Card.Img variant="top" src={userimg} alt="user-image"  />
                <Card.Body>
                    <Card.Title className="name">{user.name}</Card.Title>
                   
                    <Card.Title className="text">{user.email}</Card.Title>
                    <Card.Title className="text">{user.website}</Card.Title>
                    
                 </Card.Body>
                 

                 <Link to={`/Post/${user.id}`} > 
                 <Button 
                
                 variant="info" className="btn" ><span>Following</span></Button>
                 </Link>
             </Card>
             
             </div>
        </div>
    )
}

export default CardUser


