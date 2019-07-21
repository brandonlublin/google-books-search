import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const APIKEY = "AIzaSyAxeVxfEDQJcsgtXbl9VTDZtzUIhmNol8Y";
const urlKey = BASEURL + APIKEY;

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get(urlKey + `&q=${query}`);
  }
  

};
