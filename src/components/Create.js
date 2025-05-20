import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Create = () => {
  const [values, setValues] = useState({
    name:'',
    email:'',
    phone:''
  })
  

  const navigate = useNavigate();
  const submithandler=(e)=>{
       e.preventDefault();
       axios.post('http://localhost:5000/users', values)
       .then(res => {console.log(res);
        navigate('/')

       })
       .catch(err => console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Add user</h1>
      <form onSubmit={submithandler}>
        <div className='mb-2'>
        <label>Name</label><br></br>
        <input type='text' name='name' placeholder='enter name'
        onChange={e=>setValues({...values, name:e.target.value})}
        /><br></br>
        </div>

        <div className='mb-2'>
        <label>email</label><br></br>
        <input type='email' name='email' placeholder='enter email'
        onChange={e=>setValues({...values, email:e.target.value})}
        /><br></br>
        </div>

         <div className='mb-2'>
        <label>Number</label><br></br>
        <input type='text' name='num' placeholder='enter number'
        onChange={e=>setValues({...values, phone:e.target.value})}
        /><br></br>
        </div>

        <button className='btn btn-success'>Submit</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
      </div>
    </div>
  )
}

export default Create
