import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MDstar from 'react-icons/lib/md/star'
import MDstarHalf from 'react-icons/lib/md/star-half'

class Stars extends Component {

	// Build up JSX star icons for the rating, 
	// using react-icons from Material Design
	averageRating(rating){
		if(rating){
			let stars=[]
			for(let i= 0; i < Math.floor(rating); i++){
				stars.push(<span key={i} className='star-rating'><MDstar /></span>)					
			}
			if(rating % 1){
				stars.push(<span key={6} className='star-rating'><MDstarHalf /></span>)
			}
			return (			
				stars
			)
		} else {
			return (
				<div className='no-ratings'>
				No ratings
				</div>
			)
		}
	}

	render() {
		return (
			this.averageRating(this.props.rating)
		)
	}
}

Stars.propTypes = {
	rating: PropTypes.number
}

export default Stars
