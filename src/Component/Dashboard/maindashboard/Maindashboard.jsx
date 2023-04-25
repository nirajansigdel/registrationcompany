import React from 'react'
import Nav from '../Navbar/Nav'
import './Maindashboard.css'
import { FaBuilding, FaFile, FaFileAlt, FaStoreAlt, FaUser } from "react-icons/fa";
export const Maindashboard = () => {
    const demo = [{
        id: 1,
        icon: <FaUser />,
        name: "User"
    },

    {
        id: 2,
        icon: <FaBuilding />,
        name: "Organization"
    },
    {
        id: 3,
        icon: <FaFileAlt />,
        name: "Darta"

    },
    {
        id: 4,
        icon: <FaFile />,
        name: "Chalani"
    },
    {
        id: 5,
        icon: <FaStoreAlt />,
        name: "Storage"
    }]
    return (
        <div className='main'>
            <Nav />
            {/*=================== container (dashboard)==================== */}
            <div className="container">
                {/*=================== dashboard(description,card)==================== */}

                <div className="dashboard">
                    {/*=================== start of description==================== */}
                    <div className="description">
                        <span className='verification'>Kyc verification for</span>
                        <span className='choosefor'>Choose the appropriate option for your kyc verification type</span>
                    </div>
                    {/*=================== start of card==================== */}
                    <div className="card">
                        <div className="card_body">
                            {
                                demo.map(demo => (
                                    <div className="card_item" key={demo.id}>
                                        <div className="card_content">
                                            <div className="icon">
                                                {demo.icon}
                                            </div>
                                            <div className="name">
                                                {demo.name}
                                            </div>

                                        </div>
                                    </div>


                                ))

                            }

                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}
