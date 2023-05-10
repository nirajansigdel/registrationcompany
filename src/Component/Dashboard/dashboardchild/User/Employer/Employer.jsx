import React from 'react'
import Nav from '../../../Navbar/Nav'
import reset from './resetbutton.gif'
import './Employer.css'
import { Link } from 'react-router-dom'

export default function Employer() {
  return (
    <div className='main'>
      <Nav />
      <div className="containers">
        <div className="resetimage">
          <img src={reset} alt="" srcset="" />
        </div>

        <Link to='/resetbutton1' className="Reset">
          <button>Reset</button>
        </Link>


      </div>


    </div>
  )
}
