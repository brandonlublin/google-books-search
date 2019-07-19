import React from "react";

function Jumbotron({ children }) {
  return (
    <div>
      <div className="jumbotron text-center">
        <h2>Looking for a good book? Enter the book title below to find out a bit more about it!</h2>
        <h4>Click 'Save' to add a book to your favorites</h4>
      </div>
    </div>
  );
}

export default Jumbotron;
