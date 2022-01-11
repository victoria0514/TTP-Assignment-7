import logo from './logo.svg';
import React, { useState, useEffect } from "react";
// import React from "react";
import axios from "axios"
import './App.css';

//function App() {
export default function App() {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
    
    useEffect(() => {
    axios("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=NktVZIpFmrTj0MkgLNgOpkSlNpqzNg7a")
    .then((response) => {
    setData(response.data);
    })

    .catch((error) => {
    console.error("Error fetching data: ", error);
    setError(error);
    })
 
    .finally(() => {
    setLoading(false);
    });
    }, []);

// Code Adapted From: https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf (above but not sure if I want to do by axios or fetch API)
// NOTE: above is axios


// going to use this as a hook. not done yet, needs more research
// componentDidMount()
// {
//   fetch("http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=NktVZIpFmrTj0MkgLNgOpkSlNpqzNg7a")
//   .then((response) => {
//     setData(response.data);
//     })
//     .then((json) => {
//       console.log(json);
//       let x = json.data(() => {
//         return data;
//       });
//       console.log(x);
//     });
// }

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
