import '../signup/Signup.css'

const Signup = () => {

    return (
        <div>
             <div className="login">
                 <div>
                     <h3>Signup</h3>
                 <input type="text" className="textBox" placeholder="Username" />
                 <input type="text" className="textBox" placeholder="Password" />
                 </div>

                 <div id="loginButtons">
                 <button className="inputButton">Create</button>
                 </div>
            </div>

        </div>
    )
    
    };
    
    export default Signup;