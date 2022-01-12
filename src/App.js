import logo from './logo.svg';
import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
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


// update state from SearchForm component
getData = newData => {
  this.setState({data:newData});
}

// using render to pass everything in
render() {
  return (
    <div className='img1'>
      <div className='img2'>
      <div className='searchForm'>
        <SearchForm update={this.getData}/>
      </div>
      <div className='card'>
        {this.state.data.map((item, index) => (
          <GifCard key={index} url={item.images.original.url}/>
        ))}
      </div>
      </div>
    </div>
  )
}
}

// Couple Lines from render function and getData to new data - adapted from here:
// URL: https://stackoverflow.com/questions/39866876/how-to-setstate-to-new-data-in-react

export default App;
