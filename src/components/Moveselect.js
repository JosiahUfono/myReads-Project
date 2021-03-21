import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoveSelect extends Component {

	state = {
		bookshelf: '',
		options: ['currentlyReading', 'wantToRead', 'read', 'none']
	}

	componentDidMount() {
		this.setState({bookshelf: this.props.bookshelf})
	}

	onMoveBook(evt) {
		if(evt.target.value){
			this.setState({bookshelf: evt.target.value})
			//this.props.onBookshelfChange(evt.target.value)
			this.props.onMoveBook(evt.target.value)
		}
	}

	render() {
		return (
			<div className='book-shelf-changer'>
            <select value={this.state.bookshelf} onChange={this.onMoveBook.bind(this)}>
              <option value='move' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
		)
	}
}


MoveSelect.propTypes = {
	bookshelf: PropTypes.string.isRequired,
	onMoveBook: PropTypes.func.isRequired
}

export default MoveSelect