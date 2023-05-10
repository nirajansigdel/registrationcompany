import React from 'react'
import '../Main.css'
import Nav from '../../Navbar/Nav'
import { FaStoreAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Storage() {
  return (
    <div className="main">
      <Nav />
      <div className='container'>
        <div className="child_card">
          <div className="cards">
            <Link className="card_items">
              <div className="icon"><FaStoreAlt/></div>
              <div className="name">Bulk File</div>
            </Link >
          </div>
          <Link className="cards">
            <div className="card_items">
              <div className="icon"><FaStoreAlt/></div>
              <div className="name">Handover Temparory</div>
            </div>
          </Link>
          <Link className="cards">
            <div className="card_items">
              <div className="icon"><FaStoreAlt/></div>
              <div className="name">Handover Temparory</div>
            </div>
          </Link>

        </div>


      </div>
    </div>
  )
}
