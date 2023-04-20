import React from 'react'
import '../../Css/Admin_Employer.css'
import user from '../../image/User.JPG'

export default function Level() {
    return (
        <div className='Admin_Main'>
            <div className="AllContainer">
                <div className="admin_container">
                    <div className="admin_body">
                        <div className="admin_profile">
                            <div className="user">
                                <div className="backbutton">
                                    back
                                </div>
                                <div className="userdescription">
                                <div className="userimage">
                                    <img src={user} alt="image" srcset="" />
                                </div>
                                <span>Nirajan sigdel</span>
                                </div>
                            </div>
                        </div>
                        <form action="" method="post">
                            <div className="input_body">
                                <div className="inputsection">
                                    <label htmlFor="name">Old Password</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="inputsection">
                                    <label htmlFor="name">New Password</label>
                                    <input type="password" name="passord" id="password" />
                                </div>
                                <div className="inputsection">
                                    <label htmlFor="name">Confirm Password</label>
                                    <input type="password" name="passord" id="password" />
                                </div>
                            </div>
                            <div className="buttonportation">
                                <div className="Set_Password">
                                    <button>Set Password</button>
                                </div>
                                <div className="Reset">
                                    <button>Reset</button>
                                </div>
                            </div>
                 <div className="copyright">
                    <span>Developed by nirajan.</span>
                 </div>
                        </form>

                    </div>

                </div>




            </div>

        </div>


    )
}
