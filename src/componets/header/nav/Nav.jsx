import React from 'react';
import NavLogo from '../../../assets/img/Logo.svg'
import Notion from '../../../assets/img/Notion.png'
import Cloud from '../../../assets/img/cloud.png'
import Diomnd from '../../../assets/img/dimond.png'
import Elic from '../../../assets/img/elcis.png'
import Securtiy from '../../../assets/img/qal.png'
import Glob from '../../../assets/img/glob.png'
import Color from '../../../assets/img/color.png'
import "./nav.css"
import { NavLink } from 'react-router-dom';

const Nav = ({loading}) => {
  
  
  
  return (
    <>
    <nav  className={`Nav ${loading ? 'loading' : ""}`}>
    <img className='ps-5 pb-5' src={NavLogo} alt="" />
    
    <div className='Line mx-auto mt-3 mb-3'></div>
    
    <ul className="nav-list d-flex list-unstyled algin-item-center flex-column gap-5 ps-5 pt-4">
    <li className='d-flex algin-item-center gap-3 fw-bold'> <img src={Notion} alt="" /> <a className='text-white text-decoration-none fw-bold' href=""><NavLink to='/'>Home</NavLink></a></li>
    <li className='d-flex algin-item-center gap-3'><img src={Cloud} alt="" /><NavLink to='/About'>Cloud</NavLink></li>
    <li className='d-flex algin-item-center gap-3'><img src={Diomnd} alt="" /><a className=" text-white text-decoration-none fw-bold">Sketch</a></li>
    <li className='d-flex algin-item-center gap-3'><img src={Elic} alt="" /><a className="text-decoration-none">Experiments</a></li>
    <li className='d-flex algin-item-center text-decoration-none gap-3'><img src={Securtiy} alt="" /><a className="active text-white" href="#">Security</a></li>
    <li className='d-flex algin-item-center gap-3'><img src={Glob} alt="" /><a className="active text-decoration-none text-white" >Ownership</a></li>
    <li className='d-flex algin-item-center gap-3'><img src={Color} alt="" /><a className="active text-decoration-none text-white">A/B Test</a></li>
    </ul>
    </nav>
    </>
    );
  };
  
  export default Nav;