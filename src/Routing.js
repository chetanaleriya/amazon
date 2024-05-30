import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import React from 'react'
import Home from './Home';
import Electronics from "./Electronics"


function Routing() {
  return (
    <BrowserRouter>
    
    <Nav></Nav>
    <br></br>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/electronics' element={<Electronics></Electronics>}></Route>

    </Routes>
    </BrowserRouter>
  )
  
}

export default Routing