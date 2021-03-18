import {useState} from 'react';
import '../loginScreen/LoginScreen.css'

const LoginScreen = () => {

const [loggedIn, setLoggedIn] = useState("false");

if (loggedIn) {
    return (
             <div className="login">
                 <div>
                 <input type="text" className="textBox" placeholder="username"/>
                 <input type="text" className="textBox" placeholder="password"/>
                 </div>

                 <div id="loginButtons">
                 <button className="inputButton">login</button>
                 <p classname="inputButton">Don't have an account?</p>
                 <button className="inputButton">Sign Up</button>
                 </div>
            </div>
    )}

    else {
        <div>
            <p>You are already logged in!</p>
        </div>
    }
    
    };
    
    export default LoginScreen;