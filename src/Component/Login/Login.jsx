import React from 'react'
import './login.css'
import login from './Login.png'

export default function Login() {
    return (
        <div className='Main'>
            <div className="Container">
                <div className="login_body">
                    <form action="" method="post">
                        <h1>LOGIN </h1>
                        <div className="imageportion">
                            <img src={login} alt="image" srcset="" />
                        </div>
                        <div className="inputsection">
                            <label htmlFor="name">Username</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="inputsection">
                            <label htmlFor="name">Password</label>
                            <input type="password" name="passord" id="password" />
                        </div>
                        <div className="inputsection">
                            <p>Forget Password</p>
                        </div>
                        <div className="inputsection">
                            <button>Login</button>
                        </div>
                    </form>

                </div>


            </div>

        </div>


    )
}
