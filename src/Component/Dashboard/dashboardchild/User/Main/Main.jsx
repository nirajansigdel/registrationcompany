import React from 'react'
//  import '../Main.css'

import {  FaUser } from "react-icons/fa";
import Nav from '../../../Navbar/Nav';
import { Link } from 'react-router-dom';
export default function User() {
  return (
    <div className="main">
       <Nav/> 
    <div className='container'>
      <div className="child_card">
          <Link to='/admin' className="cards">
            <div className="card_items">
          <div className="icon"><FaUser/></div>
          <div className="name">Admin</div>
          </div> 
          </Link>
          <Link to ='/employer'className="cards">
            <div className="card_items">
          <div className="icon"><FaUser/></div>
          <div className="name">Employer</div>
          </div>
          </Link>
       
        
      </div>
        

        </div>
    </div>
  )
}
