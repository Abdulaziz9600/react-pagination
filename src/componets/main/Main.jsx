import React from 'react';
import Tablet from './Tablet/Tablet';
import About from './About/About';
import {Route,Routes}from 'react-router-dom'

const Main = ({num,paginat}) => {
  return (
    <div className='container'>
    
    
    <Routes>
    <Route path="/" element={ <Tablet data={num} pagin={paginat}/>}/>
    <Route path="/About" element={ <About/>}/>
    </Routes>
    
    
    
    </div>
    );
  };
  
  export default Main;