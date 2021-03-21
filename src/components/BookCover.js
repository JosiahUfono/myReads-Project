import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class BookCover extends Component {

	state = {
		books: []
	}

	componentWillReceiveProps(nextProps) {
		this.setState({books: nextProps})
	}

  render() {
    return (
      <div className='list-books-content'>
        <div>
          <Bookshelf books={this.state.books} shelfType='currentlyReading' shelfName='Currently Reading' onBookshelfChange={this.props.onBookshelfChange}/>
					<Bookshelf books={this.state.books} shelfType='wantToRead' shelfName='Want to Read' onBookshelfChange={this.props.onBookshelfChange}/>
					<Bookshelf books={this.state.books} shelfType='read' shelfName='Read' onBookshelfChange={this.props.onBookshelfChange}/>
        </div>
      </div>
    );
  }
}

BookCover.propTypes = {
	books: PropTypes.array,
	onBookshelfChange: PropTypes.func.isRequired
}

export default BookCover;
