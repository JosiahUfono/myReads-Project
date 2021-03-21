import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'
import MoveSelect from './Section'
import Stars from './Stars'

class Book extends Component {

	state={
		title: 'Title not provided',
		authors: ['No author provided'],
		imageUrl: '',
		averageRating: 0,
		searching: false,
	}

	componentDidMount(){
		this.validateBookData()
	}

	validateBookData() {
		if(this.props.book.title) this.setState({title: this.props.book.title})
		if(this.props.book.authors) this.setState({authors: this.props.book.authors})
		if(this.props.book.imageLinks) this.setState({imageUrl: this.props.book.imageLinks.thumbnail})
		if(this.props.book.averageRating) this.setState({averageRating: this.props.book.averageRating})
	}
	
	onMoveBook(value) {
		// Update book through api
		BooksAPI.update(this.props.book, value).then(response => {
			this.props.onBookshelfChange(response)
		})
	}

  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url(' + this.state.imageUrl + ')'
            }}
          />
          <MoveSelect
            bookshelf={this.props.bookshelf}
            onMoveBook={this.onMoveBook.bind(this)}
            onBookshelfChange={this.props.onBookshelfChange}
          />
        </div>
        <div className='book-title'>{this.state.title}</div>
				{this.state.authors.map(author => {
              return (
								<div className='book-authors' key={author}>{author}</div>
              );
            })}
        
        <Stars rating={this.state.averageRating} />
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookshelfChange: PropTypes.func.isRequired
};

export default Book;
