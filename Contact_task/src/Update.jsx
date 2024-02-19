import axios from "axios";
import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update()
{
    const {ID}=useParams([])
    const [Contact,setContact]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8081/Update/'+ID)
        .then(res=>{
            console.log(res);
            setvalues({...values,Name:res.data[0].Name,Phone:res.data[0].Phone})
        })
        .catch(err=> console.log(err))
    }) 

    const [values,setvalues]=useState({
        Name: 'Contact.Name',
        Phone:'Contact.Phone'
    })
const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:8081/Update/'+ID,values)
    .then(res=>{
        console.log(res)
        navigate('/')
    }).catch(err=> console.log(err));
}

return(
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
           <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2>Update Contact</h2>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={values.Name} onChange={e=> setvalues({...values,Name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Enter Contact Number" className="form-control" value={values.Phone} onChange={e=> setvalues({...values,Phone: e.target.value})}/>
                </div>
                <button className="btn btn-success"> Submit</button>
            </form>
           </div>
        </div>
)
}
export default Update