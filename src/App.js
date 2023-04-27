import React from 'react'
import ReactNavbar from './ReactNavbar';
import AddEmp from './AddEmp';
import { Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const App = () => {
  return (
<>
<ReactNavbar/>
<Routes>
  <Route path='/' element = {<Home/>}></Route>
  <Route path='/addemp' element = {<AddEmp/>}></Route>
  <Route path='/editEmp/:id' element = {<Edit/>}></Route>
</Routes>

</>
  )
}

export default App; 