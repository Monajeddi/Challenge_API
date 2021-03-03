import axios from 'axios';
import React,{useState,useEffect} from 'react'
import CardComment from './CardComment';
// import {Link}from 'react-router-dom'
import {Button}from 'react-bootstrap'
import back from '../assets/back.png'
import Loading from './Loading'

const Commentaires = ({match,history}) => {
    const [comments, setComment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getComment=()=>{
        const url=`https://jsonplaceholder.typicode.com/comments/?postId=${match.params.id}`
    axios.get(url)
    .then(response=>response.data)
    .then(restdata=>setComment(restdata))
    }
    
    useEffect(() => {
        getComment()
    }, [])
    let x=comments.length
    return (
        <div>
            {/* <Link  >  */}
                 {/* </Link> */}
        <h1>{x} Comments</h1>
        <div className="ListComments"> 
        
            {comments ?
            comments.map(comment=> <CardComment comment={comment} />):
            <Loading/>
            }
            
            </div>
        <img src={back}  alt="goback" width="70px"
             onClick={()=>history.goBack()}
             ></img>
            
        </div>
    )
}

export default Commentaires
