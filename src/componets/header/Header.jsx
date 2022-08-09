import React,{useRef} from 'react';
import "./header.css"
import Nav from '../header/nav/Nav';
const Header = ({loading,set}) => {
  
  // console.log(loading)

  return (
    <div>
    
    <div className='container-xl'>
    <div className='d-flex'>

    <Nav loading={loading}/>
      <div className=''>
        <h1 className='header-item ps-5 pt-2 pb-5'>Overview</h1>
        <div className=''>
          <button className="btn btn-primary d-flex align-items-center fw-bold" onClick={()=> set(!loading)}>
            X
          </button>
        </div>
      </div>
    
    </div>
    </div>
    </div>
    );
  };
  
  export default Header;