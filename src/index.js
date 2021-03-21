import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import ErrorPage from './ErrorPage'
import './index.css'

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={App}/>
			<Route path='/search' exact component={App}/>
			<Route component={ErrorPage}/>
		</Switch>
	</BrowserRouter>, 
	document.getElementById('root')
)


