import React from 'react'
import './App.css'
import Nav from './src/component/nav/nav'
import profile from "./image/profile.jpg";
import email from "./image/email.png";
import pass from "./image/pass.png";

const App = () => {
    return (
        <>
        <Nav></Nav>
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile"/>

                        </div>

                    </div>
                    <div>
                        <h1> login page</h1>
                        <div>
                            <img src={email} alt="email" className="email"/>
                            <input type="text" placeholder="user name" className="name"/>
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="email"/>
                            <input type="text" placeholder="password" className="name"/>
                        </div>
                        <div className="login-button">
                        <button>login</button>
                        </div>
                        <p className="link">
                            <a href="#">forgot password ?</a> or <a herf="#">sign up</a>
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
        </>
    );
}

export default App

