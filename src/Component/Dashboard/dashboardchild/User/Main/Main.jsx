import React from 'react'
//  import '../Main.css'

import { FaStoreAlt } from "react-icons/fa";
import Nav from '../../../Navbar/Nav';
export default function User() {
  const demo=[{id:1,
    icon:<FaStoreAlt/>,
    name:"Admin"
  },
  {id:2,
    icon:<FaStoreAlt/>,
    name:"Employer"
  }
]
  return (
    <div className="main">
      <Nav/>
    <div className='container'>
      <div className="child_card">
        {demo.map(demo=>(
          <div className="cards" key={demo.id}>
            <div className="card_items">
          <div className="icon">{demo.icon}</div>
          <div className="name">{demo.name}</div>
          </div>
          </div>
        ))}
        
      </div>
        

        </div>
    </div>
  )
}
