import logo from './logo.svg';
import React from "react";
import './App.css';

function App() {

  const fetchData = () => {
    return fetch(" http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=NktVZIpFmrTj0MkgLNgOpkSlNpqzNg7a")
          .then((response) => response.json())
          .then((data) => console.log(data));}




















  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
