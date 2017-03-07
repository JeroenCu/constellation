import React, { Component } from 'react'
import * as Actions from './../store/actions'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import Login from './Login'
import Home from './Home'

class App extends Component {

	renderBody() {
		if (this.props.loggedIn === false) {
			return <Login />
		}
		else if (this.props.loggedIn != false && window.location.pathname === "/")
		{
			return <Home />
		}
		else return (this.props.children)
	}

	render() {
		return(<div>
		<Link activeClassName="active" to='/home'><h1><i className="fa fa-star-half-o" aria-hidden="true"></i> - Constellation - <i className="fa fa-star-half-o" aria-hidden="true"></i></h1></Link>
		 <div className="login">{this.renderBody.bind(this)()}</div>
		 </div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

App = connect((state) => state, mapDispatchToProps)(App);

export default App