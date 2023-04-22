import React from 'react'
import './Maindashboard.css'
import user from './User.JPG'

import OrganizationDropdownMenu from '../dashboardchild/Organization/Main'
import DartaDropdownMenu from '../dashboardchild/darta/Main'
import ChalaniDropdownMenu from '../dashboardchild/chalani/Main'
import StorageDropdownMenu from '../dashboardchild/storage/Main'
import UserDropdownMenu from '../dashboardchild/storage/Main'
export const Maindashboard = () => {
    const navli = [
        {
            id: 1,
            name: "Organization"

        },
        {
            id: 2,
            name: "Branch Register"
        },
        {
            id: 3,
            name: "Setting"
        },
        {
            id: 4,
            name: "Edit"
        },
    ]
    const demo = [{
        id: 1,
        menu: <UserDropdownMenu />
    },

    {
        id: 2,
        menu: <OrganizationDropdownMenu />
    },
    {
        id: 3,
        menu: <DartaDropdownMenu />

    },
    {
        id: 4,
        menu: <ChalaniDropdownMenu />
    },
    {
        id: 5,
        menu: <StorageDropdownMenu />
    }]
    return (
        <div className='Dashboard'>
            <div className="Dashboard_body">
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

                    {navli.map(navli => (<ul>
                        <li><a href="">{navli.name}</a></li>
                    </ul>
                    ))}

                </div>
                <div className="menu">
                    <div className="logo_user">
                        <div className="logo">KYC SATHI</div>
                        <div className="user">
                            <div className="image_name">
                                <div className="userimage">
                                    <img src={user} alt="" srcset="" />
                                </div>
                                <span className="name">
                                    User name
                                </span>
                            </div>
                            <span>Logged in as an admin</span>

                        </div>
                    </div>
                    <div className="description">
                        <span className='verification'>Kyc verification for</span>
                        <span className='choosefor'>Choose the appropriate option for your kyc verification type</span>
                    </div>


                    <div className="card">
                        {
                            demo.map(demo => (
                                <div className="card_body" key={demo.id}>
                                    <div className="card_content">
                                        <div className="icon">
                                            {demo.icon}
                                        </div>
                                        <div className="name">
                                            {demo.name}
                                        </div>
                                        <div className="menuname">
                                            {demo.menu}
                                        </div>
                                    </div>
                                </div>


                            ))

                        }




                    </div>


                </div>
            </div>


        </div>
    )
}
