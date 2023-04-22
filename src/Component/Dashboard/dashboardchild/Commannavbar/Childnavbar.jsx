import React from 'react'
// import user from'../../maindashboard/User.jpg'
import user  from '../../maindashboard/User.JPG'
import '../../maindashboard/Maindashboard.css'

export default function Childnavbar() {
    const childdemo = [
        {
            id: 1,
            name: "User"

        },
        {
            id: 2,
            name: "Organization"
        },
        {
            id: 3,
            name: "Darta"
        },
        {
            id: 4,
            name: "Chalani"
        },
        {
            id: 5,
            name: "Storage"
        }
    ]
  return (
    <div className='main'>
        <div className="navbar">
                    <div className="admin_profile">
                        <div className="admin">
                            <div className="admin_image">
                                <img src={user} alt="" srcset="" />
                            </div>

                            <div>User</div>
                        </div>
                        <div className="profile">
                            <span>Edit Profile</span>
                        </div>

                    </div>

                    {childdemo.map(childdemo => (<ul>
                        <li><a href="">{childdemo.name}</a></li>
                    </ul>
                    ))}

                </div>
      
    </div>
  )
}
