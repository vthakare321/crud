import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



const Update = () => {
  // const [data, setData] = useState([])
  const {id} = useParams();
  const [values, setValues] = useState({
      name:'',
      email:'',
      phone:''
    })
    const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:5000/users/' + id)
    .then(res => {
      setValues(res.data);
    })
    .catch(err => console.log(err))
  },[])

  const handleUpdate =(e)=>{
    e.preventDefault();
    axios.put('http://localhost:5000/users/'+id, values)
       .then(res => {console.log(res);
        navigate('/')

       })
       .catch(err => console.log(err))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Upadate a user</h1>
      <form onSubmit={handleUpdate}>
        <div className='mb-2'>
        <label>Name</label><br></br>
        <input type='text' name='name' placeholder='enter name'
        value={values.name}
        onChange={e=>setValues({...values, name:e.target.value})}
        /><br></br>
        </div>

        <div className='mb-2'>
        <label>email</label><br></br>
        <input type='email' name='email' placeholder='enter email'
         value={values.email}
         onChange={e=>setValues({...values, email:e.target.value})}
        /><br></br>
        </div>

         <div className='mb-2'>
        <label>Number</label><br></br>
        <input type='text' name='num' placeholder='enter number'
         value={values.phone}
         onChange={e=>setValues({...values, phone:e.target.value})}
        /><br></br>
        </div>

        <button className='btn btn-success'>Update</button>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
      </div>
    </div>
  )
}

export default Update
