import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

function Read(){
    const {ID}=useParams();
    const [Contact,setContact]=useState([])
    useEffect(()=>
    {
        axios.get('http://localhost:8081/read/'+ID)
        .then(res=> 
            {
                console.log(res)
                setContact(res.data[0]);
            })
        .catch(err=> console.log(err))
    },[])
    return(
<div>
        <div>
            <div>
            <h2>Contact Details</h2>
            <h2>{Contact.ID}</h2>
            <h2>{Contact.Name}</h2>
            <h2>{Contact.Phone}</h2>
            </div>
            <Link to="/" className='btn btn-primary me-2'>Back</Link>
            <Link to={'/edit/${Contact.ID}'} className='btn btn-info'>Edit</Link>
        </div>
</div>
    )
}
export default Read