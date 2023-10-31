import React from 'react';
import './index.css';
import {Route,Routes } from 'react-router-dom';
import Login from './routes/Login/login';
import Home from './routes/Home/home.jsx'
import Registermain from './routes/Register/registermain/registermain';
import Registercustomer from './routes/Register/register2/registercustomer';
import Registerlabour from './routes/Register/register1/registerlabour';
import Market from './components/market/Market';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/registermain'element={<Registermain />} />
      <Route path='/registercustomer' element={<Registercustomer />} />
      <Route path='/registerlabour' element={<Registerlabour />} />
      <Route exact path="/market" element={<Market />} />
    </Routes>
  )
}

export default App;
