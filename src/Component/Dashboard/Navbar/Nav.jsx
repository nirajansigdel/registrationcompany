import React from 'react'
import './Nav.css'
import User from './User.JPG'
import { FaStoreAlt } from "react-icons/fa";

export default function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>KYC SATHI</h1>
            </div>
            <div className="navitem">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">User</a></li>
                    <li><a href="#">Organization</a></li>
                    <li><a href="#">Darta</a></li>
                    <li><a href="#">Chalani</a></li>
                    <li><a href="#">Storage</a></li>

                </ul>
            </div>
            <div className="user_menu">
                <div className="user">
                    <div className="image_user">
                        <div className="image">
                            <img src={User} alt="" />
                        </div>
                        <div className="user">
                            <h4>User name</h4>
                        </div>
                    </div>
                    <div className="admin">
                        Logged in as an <a href="">admin</a>
                    </div>
                </div>
                <div className="menu_icon">
                    <FaStoreAlt />
                </div>

            </div>
        </div>



    )
}
