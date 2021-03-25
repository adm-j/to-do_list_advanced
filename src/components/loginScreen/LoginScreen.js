import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import '../loginScreen/LoginScreen.css';

const LoginScreen = ({signUp, login}) => {

const [loggedIn, setLoggedIn] = useState("false");

    return (
             <div className="login">
                 <div>
                     <h3>Login</h3>
                 <input type="text" className="textBox" placeholder="Username"/>
                 <input type="text" className="textBox" placeholder="Password"/>
                 </div>

                 <div id="loginButtons">
                 <button className="inputButton" onClick={login}>login</button>
                 <p classname="inputButton">Don't have an account?</p>
                 <NavLink to="signup"><button className="inputButton" onClick={signUp}>Sign Up</button></NavLink>
                 </div>
            </div>
    )
    
    };
    
    export default LoginScreen;