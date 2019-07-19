import React, { Component } from "react";
import SearchBar from "../components/Search";
// import SearchResults from "../components/searchResults"
import API from "../utils/API"

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    API.getBooks("Cristo")
    .then(res => this.setState({ books: res.data.items }))
    .catch(err => console.log(err));
    console.log(this.books);
    
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.search) {
      API.getBooks(this.state.search)
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>

        <SearchBar handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />

        {/* <SearchResults books={this.state.books}/> */}

      </div>
    );
  }
}

export default Search;
