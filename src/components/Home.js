import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


const Home = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate();
   useEffect(()=>{
    axios.get('http://localhost:5000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
   },[])

   const handleDelete =(id)=>{
    const confirm = window.confirm("would you like to delete");
    if(confirm){
      axios.delete('http://localhost:5000/users/'+id)
      .then(res =>{
        navigate('/');
        // location.reload();
        
      })
      
      .catch(err=>console.log(err));
      
    }

  }

  return (
    <div className='d-flex flex-column justify-content-center align-item-center bg-light vh-100'>
      <h1>list of users</h1>
<div className='w-75 rounded bg-white border shadow p-4'>
       <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Add+</Link>
        </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((d, i)=>(
              <tr key={i}>
                <td>{i+1}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>

                <td>
                  <Link to={`/read/${d.id}` }className='btn btn-sm btn-success me-2 '>Read</Link>
                  <Link  to={`/update/${d.id}` } className='btn btn-sm btn-primary me-2'>Edit</Link>
                  <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger me-2'>Delete</button>
                </td>
        
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </div>
  )

}

export default Home
