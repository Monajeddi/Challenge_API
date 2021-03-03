import React from 'react'
import {Form,FormControl}from 'react-bootstrap'

const Filter = ({setFilterName,filterName}) => {
    
    return (
        <div>
            <Form inline>
                <FormControl 
                onChange={(e)=>setFilterName(e.target.value)}
                value={filterName}
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" />
                
                
            </Form>
        </div>
    )
}

export default Filter
