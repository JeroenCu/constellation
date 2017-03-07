import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from "./components/App"
import Login from './components/Login'
import Home from './components/Home'
import User from './components/User'
import {Provider} from 'react-redux'
import store from './store/store'
import {Router, Route, browserHistory} from 'react-router'

ReactDOM.render(
	<Provider store={store}>
  		<Router history={browserHistory}>
       		<Route path="/" component={App}>
				<Route path="/home" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/home/:email" component={User} />
			</Route>
   		</Router>
	</Provider>,
  	document.getElementById('root')
)