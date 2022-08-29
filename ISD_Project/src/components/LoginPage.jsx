

import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import Button from './Button';




const LoginPage = () => {
    const axios = require('axios').default;

    const handleSubmit = (e) => {
        e.preventDefault();

        var obj ={
            "username" : username,
            "password" : password
        }


        axios.post("http://localhost:8080/user/login",
        obj
        ).then(
            function(response){
                console.log("Request Successful: ");
                console.log(response)
                alert("Logged in SUCCESSFULLY")
                localStorage.setItem("username", response.data.username)
            }
        ).catch(function(error){
            console.log(error);
        } )

    }

    const[password,setPassword] = useState('');
    const [username,setUsername] = useState('');

    
    const [isShown, setIsSHown] = useState(false);

    // This function is called when the checkbox is checked or unchecked
    const togglePassword = () => {
      setIsSHown((isShown) => !isShown);
    };

    const handleLogout = () => {
        console.log(localStorage.getItem("username"))
        localStorage.setItem("username", "undefined");
    }

    if(localStorage.getItem("username")== "undefined"){
    return(
        <div className="container_register">
        <div className="app-wrapper">
            <div>
                <h2 className="title_1"> Sign in to us</h2>
            </div>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <div className="name1">
                    <label class="lable">UserName</label>
                    <input className="input" type="text"
                    value={username} onChange ={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="nameWrapper">
                <div className="password">
                    <label class="lable">Password</label>


                    <input
                    type={isShown ? "text" : "password"}
                    value = {password}
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="checkbox-container">
                    <label htmlFor="checkbox">Show password?</label>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={isShown}
                        onChange={togglePassword}
                    />
                    </div>



                </div>
               
                </div>
                <div>
                    <button className="submit">Login</button>
                    </div> 
                    <div className="hi">
                    <footer>
            <p>First time? <Link to="/register"><b>Create an account.</b></Link></p>
            
        </footer>
                </div>
            </form>
            </div>
        </div>

    );
    }else{
        return(
        <Link to="/">
        <Button onClick={handleLogout}>Logout</Button>
        </Link>
        );
    }
}

export default LoginPage;