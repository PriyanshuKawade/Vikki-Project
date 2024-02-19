import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Homee()
{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setData(res.data))
        .catch(err=> console.log(err));
    },[])
    const handleDelete=(ID)=>{
        axios.delete('http://localhost:8081/delete/'+ID)
        .then(res=>{
            console.log();
        })
        .catch(err=> console.log(err));
    }
    return(
        <div>
<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
            <h2>Contact List</h2>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Create +</Link>
            </div>
        <table className='table'>
            
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((Contact,index)=>{
                        return <tr key={index} >
                            <td>{Contact.ID}</td>
                            <td>{Contact.Name}</td>
                            <td>{Contact.Phone}</td>
                            <td>{Contact.Action}</td>
                            <td>
                                <Link to={'/read/${Contact.ID}'} className='btn btn-sm btn-info'>Read</Link>
                                <Link to={'/edit/${Contact.ID}'} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                <button onClick={()=> handleDelete(Contact.ID)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
        </table>
    </div>
</div>
        </div>
    )
}
export default Homee