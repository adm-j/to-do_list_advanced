import {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import '../loginScreen/LoginScreen.css';

const LoginScreen = ({signUp, login, setUser, setIsAuthenticatored}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const history = useHistory();

    const formHandler = async (event) => {
        event.preventDefault(); //prevent refresh

        const res = await fetch("http://localhost:5000/users/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(
                { 
                username: username,
                password: password
            })
        })
        const data = await res.json();
        setUser(data.username)

        history.push(`/${data.user}`);
        setIsAuthenticatored(true);
    }

    return (
             <div className="login">
                 <div>
                     <h3>Login</h3>
                 <input type="text" className="textBox" placeholder="Username"/>
                 <input type="text" className="textBox" placeholder="Password"/>
                 </div>

                 <div id="loginButtons">
                 <button className="inputButton" onClick={login}>login</button>
                 <p>Don't have an account?</p>
                 <NavLink to="signup"><button className="inputButton" onClick={signUp}>Sign Up</button></NavLink>
                 </div>
            </div>
    )
    
    };
    
    export default LoginScreen;