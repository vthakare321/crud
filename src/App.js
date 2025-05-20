import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'
import Delete from './components/Delete'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}>Home</Route>
           <Route path='/create' element={<Create/>}>Create</Route>
           <Route path='/update/:id' element={<Update />}>Update</Route>
           <Route path='/read/:id' element={<Read/>}>Read</Route>
           <Route path='/delete' element={<Delete/>}>Delete</Route>
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
