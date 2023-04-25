import React from 'react'
import Nav from '../../../Navbar/Nav'
import '../../Main.css'
import { FaUser } from "react-icons/fa";
export default function User() {
  const demo=[{id:1,
    icon:<FaUser/>,
    name:"Admin"
  },
  {id:2,
    icon:<FaUser/>,
    name:"Employer"
  },
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
