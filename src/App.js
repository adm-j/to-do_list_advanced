//CSS
import './App.css';
import './components/login/Login.css'
//Components
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import LoginScreen from './components/loginScreen/LoginScreen';
import Signup from './components/signup/Signup';
//Packages
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

const App = () => {

  const [loggedIn, setLogin] = useState(false)
  const [user, setUser] = useState("");

  return (
    <Router>

    <div className="main">

        <div className="header">
          <div id="login">{ loggedIn ? <Logout /> : <Login />}</div>
          <NavLink to={`/${user}`} id="home" >Home</NavLink>
              <h1>To do List</h1>
        </div>

      <div className="content">

      <Switch>
      <Route exact path={`/${user}`}>
      { loggedIn ? <p>You're logged in! Content here</p> : <p>Welcome screen</p>}
      </Route>
      </Switch>

      <Switch>
      <Route exact path="/login">
      <LoginScreen setIsAuthenticatored={setLogin}/>
      </Route>
      </Switch>

      <Switch>
      <Route exact path="/signup">
      <Signup />
      </Route>
      </Switch>
      </div>

    </div>
    </Router>
  );
}

export default App;