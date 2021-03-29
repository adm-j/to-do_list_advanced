import {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import '../loginScreen/LoginScreen.css';

const LoginScreen = ({signUp, setIsAuthenticatored, setUsername}) => {

    const [user, setUser] = useState("");
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
                username: user,
                password: password
            })
        })
        const data = await res.json();
        console.log(data.userToken.token);
        setUsername(data.userName)
        localStorage.setItem("token", data.userToken.token);
        history.push(`/${data.userName}`);
        setIsAuthenticatored(true);
    }

    return (
             <div className="login">
                 <div>
                     <form onSubmit={formHandler}>
                     <h3>Login</h3>
                 <input type="text" className="textBox" placeholder="Username"
                 onChange={(e) => setUser(e.target.value)} />
                 <input type="text" className="textBox" placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)} />
                 <input type="submit" className="inputButton" value="Login"/>
                 </form>
                 </div>

                 <div id="loginButtons">
                 <p>Don't have an account?</p>
                 <NavLink to="signup"><button className="inputButton" onClick={signUp}>Sign Up</button></NavLink>
                 </div>
            </div>
    )
    
    };
    
    export default LoginScreen;