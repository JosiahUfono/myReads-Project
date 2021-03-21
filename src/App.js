import React from "react";
import { Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookCover from "./components/BookCover";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
	}
	
	componentDidUpdate() {
		this.getBooks()
	}

  getBooks() {
    BooksAPI.getAll().then(response => {
      this.setState({ books: response });
    });
  }

  moveBookHandler(value) {
    this.getBooks();
  }

  onCloseSearch() {
    this.setState({ books: [] });
    this.getBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
					exact
          path="/search"
          render={() => (
            <Search
              onCancelSearch={this.onCloseSearch.bind(this)}
              myBooks={this.state.books}
            />
          )}
        />

        <Route
					exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
              </div>
              <BookCover
                books={this.state.books}
                onBookshelfChange={this.moveBookHandler.bind(this)}
                currentBooks={this.state.books}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
