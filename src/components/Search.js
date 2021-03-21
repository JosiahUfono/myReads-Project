import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
		results: []
  };

  updateQuery = (query) => {
		//If there is a query, search the API then compare to mybooks
		if(query){
		BooksAPI.search(query).then(response => {
			if(!response.error){
				this.compareToMybooks(response)
			} else {
				this.clearQuery()
			}
		})} else {
			this.clearQuery()
		}
	}

	// Check search results against myBooks so we can set the correct select value
	// if match, we swap our book into the results to current selection is correct
	compareToMybooks(response){
		response.forEach(book => {
			this.props.myBooks.forEach(myBook => {
				if(book.id === myBook.id){
					book.shelf = myBook.shelf
				}
			})
		})
		this.setState({results: response})
	}

  clearQuery = () => {
    this.setState({results: []});
	}
	
	onMoveBook(){
		
	}

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link
						to='/'
            className='close-search'
            onClick={this.props.onCancelSearch}
          >
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input type='text' placeholder='Search book by author or title' onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className='search-books-results'>
					<p>{this.state.results.length} results (max 20)</p>
          <ol className='books-grid'>
							{this.state.results ?(this.state.results.map(book =>{
								return (
								<li key={book.id}>
									<Book bookshelf={book.shelf?book.shelf:'none'} book={book} onBookshelfChange={this.onMoveBook.bind(this)}/>
								</li>
							)})):(
            <li>No results</li>
							)}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
	onCancelSearch: PropTypes.func.isRequired,
	myBooks: PropTypes.array.isRequired
}


export default Search;
