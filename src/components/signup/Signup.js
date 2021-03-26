import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import '../signup/Signup.css';

const Signup = ({setIsAuthenticatored}) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const history = useHistory();

    const formHandler = async (event) => {
        event.preventDefault(); //prevent refresh

        const res = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(
                { 
                username: user,
                password: password
            })
        })
        const data = await res.json();
        console.log(data.message);
        setMessage(data.message);

        // history.push("/");
        // setIsAuthenticatored(true);


    };


    return (
        <div>
             <div className="login">
             <form onSubmit={formHandler}>
                 <div>
                     <h3>Signup</h3>
            
                 <input type="text" className="textBox" placeholder="Username" 
                 onChange={(e) => setUser(e.target.value)}/>
                 <input type="text" className="textBox" placeholder="Password" 
                 onChange={(e) => setPassword(e.target.value)}/>
                 </div>

                 <div id="loginButtons">
                 <input type="submit" className="inputButton" value="Create"/>
                 </div>
                 <p>{message}</p>
                 </form>
            </div>

        </div>
    )
    
    };
    
    export default Signup;