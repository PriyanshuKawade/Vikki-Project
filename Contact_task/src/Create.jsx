import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create()
{
    const [values,setvalues]=useState({
        Name: '',
        Phone:''
    })
const navigate=useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8081/Contact',values)
        .then(res=>{
            console.log(res);
            navigate('/')
        })
        .catch(err=> console.log(err))
    }
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
           <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Contact</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Name" className="form-control" onChange={e=> setvalues({...values,Name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Enter Contact Number" className="form-control" onChange={e=> setvalues({...values,Phone: e.target.value})}/>
                </div>
                <button className="btn btn-success"> Submit</button>
            </form>
           </div>
        </div>
    )
}
export default Create