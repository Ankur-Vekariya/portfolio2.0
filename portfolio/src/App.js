import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Technology from "./components/technology";

function App() {
  return (
    <div className="App">
      {/* <div> */}
      <Hero />

      {/* </div> */}
      <div>
        <Projects />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Technology />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
