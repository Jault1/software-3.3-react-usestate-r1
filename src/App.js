// import logo from './logo.svg';
import './code/App.css';
import Counter from "./code/2.3-part-2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>Counter stuff</p>
      </header>
      <p>Brief<br></br>
      In part 2, modify and add new features using setCount, e.g.<br></br><br></br>
      Add a 'Reset' button to reset the value to 0<br></br>
      Add a validation check to prevent negative (-) numbers on the counter
      Submission<br></br>
      Submit the URL of the GitHub Repository that contains your work.
      </p>
<Counter />  </div>
  );
}

export default App;
