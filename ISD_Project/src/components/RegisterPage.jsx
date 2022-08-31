
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Register = () => {

    const axios = require('axios').default;

    function check(s,c){
        if(s.contains(c)){
            return true;
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const regObj = {           
            "username": username,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phoneNumber": phoneNumber,
            "ordersList": []
        }

        console.log(username)
        var fault = false;
        for(var i = 0; i < username.length; i++){
            if(username.charAt(i) == ' '){
                fault = true;
                break;

            }
        }

        if(fault){
            alert("Username Cant have Spaces");
            return
        }

        


        if(password.length < 4){
            alert("Password length cant be less than 4")
            return
        }

        if(username == "" || firstName == "" || lastName=="" || phoneNumber==""){
            alert("Field cant be empty")
            return
        }

        fault = false;

        for(var i = 0; i < phoneNumber.length; i++){
            if(phoneNumber.charAt(i) > '9' || phoneNumber.charAt(i) < '0'){
                fault = true;
                break
            }
        }

        if(fault){
            alert("Numbers only")
            return
        }

        

        axios.get("http://localhost:8080/order/username=" +username).then(function(response){
            alert("Username exists");
        }  
        ).catch(function(error){
            axios.post("http://localhost:8080/user/create",
        regObj
        ).then(
            function(response){
                console.log("Request Successful: ");
                console.log(response)
                alert("REGISTERED SUCCESSFULLY")
            }
        ).catch(function(error){
            console.log(error);
        } )
        })



    

        

    }

    const [isShown, setIsSHown] = useState(false);

    // This function is called when the checkbox is checked or unchecked
    const togglePassword = () => {
      setIsSHown((isShown) => !isShown);
    };

    const[password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [firstName,setFirstname] = useState('');
    const [lastName,setLastname] = useState('');
    const [phoneNumber,setPhonenumber] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('male');

    return(
        <div className="container_register">
        <div className="app-wrapper">
            <div>
                <h2 className="title_1"> Create Account</h2>
            </div>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <div className="name1">
                    <label class="lable">UserName</label>
                    <input className="input" type="text"
                    value={username} onChange ={(e) => setUsername(e.target.value)} 
                    />
                </div>


                <div className="name1">
                
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

                <div className="nameWrapper">
                <div className="name">
                    
                    <label class="lable">FirstName</label>

                    <input className="input" type="text"
                    value={firstName} onChange ={(e) => setFirstname(e.target.value)} 
                    />
                </div>
                <div className="name">
                    <label class="lable">LastName</label>
                    
                    <input className="input" type="text"
                    value={lastName} onChange ={(e) => setLastname(e.target.value)} 
                    />
                </div>
                </div>
                <div className="nameWrapper">
                <div className="phoneNumber">
                    <label class="lable">PhoneNumber</label>
                    <input className="input" type="text"
                    value={phoneNumber} onChange ={(e) => setPhonenumber(e.target.value)} 
                    />
                </div>
                <div className="address">
                    <label class="lable">Address</label>
                    <input className="input" type="text"
                    value={address} onChange ={(e) => setAddress(e.target.value)} 
                    />
                </div>
                </div>
                <div className="email">
                    <label class="lable">Email</label>
                    <input className="input" type="email"
                    value={email} onChange ={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="gender">
                    <label class="lable">Gender</label>
                    <div class="container">

                <div className="name1">
                    <select value={gender}
                    onChange = {(e) => (setGender(e.target.value))}
                    >
                        <option value= "male"> Male </option>
                        <option value= "female"> Female </option>
                    </select>
                </div>


</div>
                   
                </div>
                
                <div>
                    <button className="submit">Register</button>
                    
                    </div> 
                    <div className="hi">
                    <footer>
            <p> <Link to="/login"><b><h3>Already have an account !!!</h3></b></Link>.</p>
            
        </footer>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Register;