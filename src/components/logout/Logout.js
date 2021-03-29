import {NavLink} from 'react-router-dom';

const Logout = ({setIsAuthenticated, setUser}) => {

    const logoutHandler = () => {
        
        setUser("");
        setIsAuthenticated(false);
        console.log("logout")
    }

    return (
        <div>
        <NavLink to="/" onClick={logoutHandler}>logout</NavLink>
        </div>
    )
    
    };

    export default Logout;