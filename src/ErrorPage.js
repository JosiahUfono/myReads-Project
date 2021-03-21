import React, { Component } from 'react'

class ErrorPage extends Component {
	render() {
		return (
			<div className='search-books-results'>
				<h1>Page doesn't exist!</h1>
				<h2>Valid paths are '/ ' and '/search '</h2>
				<img className='udacity-logo' src={require('./img/errorLogo.png')} alt='Udacity Logo' />
			</div>
		)
	}
}

export default ErrorPage
	