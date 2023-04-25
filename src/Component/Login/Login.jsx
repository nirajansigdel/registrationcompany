import React from 'react'
import './login.css'
import login from './Login.png'

export default function Login() {
    return (
        <div className='Main'>
            <div className="Container">
                 {/*-------------------------login body(login,form) ------------------------- */}
                <div className="login_body">
                     {/*--------------------------- starting of Login ------------------------- */}
                    <div className="login">
                        <h2>LOGIN </h2>
                        <div className="imageportion">
                            <img src={login} alt="image" srcset="" />
                        </div>
                    </div>

                    {/*--------------------------- starting of form ------------------------- */}
                    <form action="" method="post">
                        <div className="inputsection">
                            <label htmlFor="name">User name/ email id</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="inputsection">
                            <label htmlFor="name">Password</label>
                            <input type="password" name="passord" id="password" />
                        </div>
                        <div className="inputsection">
                            <button>Login</button>
                        </div>
                        <div className="inputsection">
                            <p>Forget Password</p>
                        </div>
                    </form>

                </div>


            </div>

        </div>


    )
}
