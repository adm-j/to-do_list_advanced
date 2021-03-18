import '../signup/Signup.css'

const Signup = () => {

    return (
        <div>
             <div className="login">
                 <div>
                 <input type="text" className="textBox"/>
                 <input type="text" className="textBox"/>
                 </div>

                 <div id="loginButtons">
                 <button className="inputButton">Create account</button>
                 </div>
            </div>

        </div>
    )
    
    };
    
    export default Signup;