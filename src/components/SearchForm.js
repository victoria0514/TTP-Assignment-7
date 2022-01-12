import React, { Component } from "react";

//We can also use ES6 classes to define components: (from lecture)
class SearchForm extends Component {
  // constructor and props
  constructor(props) {
    super(props);
    // Calling super props so this.state won't be undefined
    this.state = {
      userInput: "",
      data: [],
    };
  }

  // getting the user input from the search bar
  getUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  // outputting the GIFs based on the user input put into the search bar
  getSearch = (e) => {
    let url = `http://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=NktVZIpFmrTj0MkgLNgOpkSlNpqzNg7a`;
    fetch(url)
      // Source: https://stackoverflow.com/questions/45624780/e-target-value-on-an-input-field-reactjs-how-does-it-work/45624833

      // Fetching data using promise
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response.data });
        this.props.update(response.data);
      })
      // if something goes wrong, will catch here
      .catch((err) => console.log(err));
  };

  // Now we are going to do the same thing for the remaining trending and random GIFs
  // Without the search term

  // outputting TRENDING GIFs based on the user input
  getTrending = () => {
    let url =
      "http://api.giphy.com/v1/gifs/trending?api_key=NktVZIpFmrTj0MkgLNgOpkSlNpqzNg7a";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.props.update(response.data);
      })
      .catch((err) => console.log(err));
  };

  // outputting RANDOM GIFs based on the user input
  getRandom = () => {
    let url =
      "http://api.giphy.com/v1/gifs/random?api_key=NktVZIpFmrTj0MkgLNgOpkSlNpqzNg7a";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response.data });
        this.props.update([response.data]);
      })
      .catch((err) => console.log(err));
  };

  // using render to pass everything in
  render() {
    return (
      <div className="image2">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Here for GIFs"
            onChange={this.getUserInput}
            id="bar"
          />
        </div>
  
        <div className="buttons">
          <button onClick={this.getSearch} value={this.state.userInput}>Search</button>
          <button onClick={this.getTrending}>Trending</button>
          <button onClick={this.getRandom}>Random</button>
        </div>
      </div>
    );
  }
}

export default SearchForm;