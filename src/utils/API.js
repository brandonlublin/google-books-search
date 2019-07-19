import axios from "axios";

const BASEURL = "https://www.googleapis.com/auth/books/v1/volumes?";
const APIKEY = "AIzaSyAxeVxfEDQJcsgtXbl9VTDZtzUIhmNol8Y"

export default {
  // Gets all books
  getBooks: function(query) {
    return axios.get(BASEURL + APIKEY + `&q=${query}`);
  }
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },w
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
