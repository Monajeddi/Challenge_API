import React,{useEffect, useState} from 'react'
import CardUser from './CardUser'
import {Input} from 'antd';
import { AutoComplete } from 'antd'
import axios from 'axios'
import {Form,FormControl}from 'react-bootstrap'
import Loading from './Loading';


const ListesUsers = () => {
    const [users, setUsers] = useState([])
    const [filterName, setFilterName] = useState("");

    const getUsers=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.data)
        .then(el=>setUsers(el))
        .catch(error=>`this is ${error}`)
    }
    useEffect(() => {
        getUsers()
    }, [])

   
    return (
        <div >
            <div>
                

                <AutoComplete className="search1">
                <Input.Search size="large" placeholder="Search" 
                onChange={(e) => setFilterName(e.target.value)}
                />
                </AutoComplete>

            </div>
            <h1> Listes Of Users</h1>
            <br/>

            <div className="ListCards">

            {users ?
            users.filter(user=>user.name.toLowerCase().includes(filterName.toLowerCase())).map(user=>
            <CardUser user={user} key={user.id} className="card-user" />):
            <Loading/>
            }

              
            </div>

           
                
            
              
              
            
        </div>
    )
}

export default ListesUsers
