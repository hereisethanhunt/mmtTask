import React from "react";
import BookLibraryView from "../../component/BookLibraryView";
import BookLibraryAdd from "../../component/BookLibraryAdd";
import "./bookLibrary.css";

class BookLibrary extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("counter")) localStorage.setItem("counter", "4");
  }
  render() {
    return (
      <div className="BookLibrary">
        <div label="Add Books">
          <BookLibraryAdd />
        </div>
        <div label="View Books">
          <BookLibraryView />
        </div>
      </div>
    );
  }
}

export default BookLibrary;
