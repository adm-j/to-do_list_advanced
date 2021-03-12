import './App.css';

const App = () => {
  return (
    <div className="main">

      <div className="login">
      <input type="text" id="textBox"/>
      <input type="text" id="textBox"/>
      <button id="inputButton">login</button>
      </div>

      <div className="noteInput">
      <input type="text" id="textBox"/> <button id="inputButton">add note</button>
      </div>

      <div className="list">
      <p>mapped list will go here</p>

      </div>

    </div>
  );
}

export default App;
