//CSS
import './App.css';
import './components/login/Login.css'
import './components/Notes/Notes.css'
//Components
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import LoginScreen from './components/loginScreen/LoginScreen';
import Signup from './components/signup/Signup';
import Notes from './components/Notes/Notes';
//Packages
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const App = () => {

  const [loggedIn, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {

    const noteHandler = async () => {

    if (localStorage.length === 0) {
      console.log("setting user as not logged in")
      setLogin(false);
      setUser("");
    }

    if (localStorage.length >0) { //not working as intended
      console.log("attempting to fetch notes as user logged in");
      let localData = localStorage.getItem("data");
      let parsedData = JSON.parse(localData);
      const res = await fetch(`http://localhost:5000/notes/${parsedData.id}`);
      const data = await res.json();
      setUser(parsedData.user);
      setLogin(true);
      setNotes(data);
    }

  }

  noteHandler();

  }, [])

  return (
    <Router>

    <div className="main">

        <div className="header">
          <div id="login">{ loggedIn ? <Logout setIsAuthenticated={setLogin} setUser={setUser} /> : <Login />}</div>
          <NavLink to={`/${user}`} id="home" >Home</NavLink>
              <h1>To do List</h1>
              { loggedIn &&<p>Welcome {user}!</p>}
        </div>

      <div className="content">

      <Switch>
      <Route exact path={`/${user}`}>
      { loggedIn ? <Notes list={notes} /> : <p>Welcome screen</p>}
      </Route>
      </Switch>

      <Switch>
      <Route exact path="/login">
      <LoginScreen setIsAuthenticatored={setLogin} setUsername={setUser}/>
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