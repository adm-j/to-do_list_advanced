import {useState} from 'react';
import './App.css';
import LoginScreen from './components/loginScreen/LoginScreen';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

  const [component1, showComponent1] = useState("false");
  const [component2, showComponent1] = useState("false");
  const [component3, showComponent1] = useState("false");
  const [component4, showComponent1] = useState("false");
  
  return (
    <Router>

    <div className="main">

        <div className="header">
                <h1>To do List</h1>
        </div>

      <LoginScreen/>
      <div className="noteInput">
      <input type="text" id="textBox"/> <button id="inputButton">add note</button>
      </div>

      <div className="list">
      <p>mapped list will go here</p>

      </div>

    </div>
    </Router>
  );
}

export default App;