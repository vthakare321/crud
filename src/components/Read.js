import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([])
  const {id} = useParams();
  useEffect(()=>{
    axios.get('http://localhost:5000/users/' + id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])
  
  return (
    
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>user Details</h1>
      <div className='mb-2'>
      <strong>Name: {data.name}</strong><br></br>
        </div>

      <div className='mb-2'>
      <strong>Email:{data.email}</strong><brr></brr>
       </div>

      <div className='mb-2'>
      <strong>phone:{data.phone}</strong>
      </div>

      <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
      <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
  )
}

export default Read
