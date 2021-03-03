import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Cardpost from './Cardpost'
import {Button}from 'react-bootstrap'
import goback from '../assets/goback.png'
import Loading from './Loading'

const Post = ({match,history}) => {
    const [posts, setPosts] = useState([])

   
    const getuser=()=>{
        
        const url =`https://jsonplaceholder.typicode.com/posts/?userId=${match.params.id}`
        axios.get(url)
        .then(response => response.data)
        .then(resData => setPosts(resData))
    }
    useEffect(() => {
        getuser()
        
    }, [])
    console.log(posts)
    return (
        <div>
            <div className="goback">
                 <img src={goback}  alt="goback" width="150px" 
             onClick={()=>history.goBack()}
             ></img>
            </div>
            

           
            <h1 className="title-2">Liste of posts</h1>
            <div className="ListCards" > 

            { posts ? 
            posts.map(post=> <Cardpost post={post} key={post.id}/>):
            <Loading/>
        }
            </div>
            
        </div>
    )
}

export default Post
