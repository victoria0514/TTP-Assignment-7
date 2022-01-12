import logo from './logo.svg';
import React, {Component} from 'react';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import './App.css';

//We can also use ES6 classes to define components: (from lecture)
class App extends Component {

  // constructor and props
  constructor(props) {
    super(props);
// Calling super props so this.state won't be undefined
    this.state = {
      data: []
    }
  }

// mounting
// By creating an instance of a component, it will be inserted into the DOM
  componentDidMount = () => {
    // when compond mounds, display the trending GIFs
    let url='http://api.giphy.com/v1/gifs/trending?api_key=NktVZIpFmrTj0MkgLNgOpkSlNpqzNg7a';
    fetch(url)

    // Fetching data using promise
    .then(response => response.json())
    .then(response => {
      this.setState({ data: response.data});
    })
    // if something goes wrong, will catch here
    .catch(error => console.log(error));
  }






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
