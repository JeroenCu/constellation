import React, { Component } from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import * as Actions from './../store/actions'
import FacebookLogin from 'react-facebook-login'

class Login extends Component {
    becomeFriend(email) {
        this.props.actions.becomeFriend(this.props.loggedIn, email)
    }

    render() {
        if (!this.props.loggedIn) {
            window.location = "/"
        }
        else {
            let userArray = []
            this.props.userList.forEach((el, i) => {
                if (el.email === this.props.params.email) {
                    userArray.push(el)
                }
                else return false
            })
            let body
            if (userArray[0].you === true) {
                body = <div className="alert">That's me!</div>
            }
            else if (userArray[0].friend === true) {
                body = <div className="alert">I'm your friend!</div>
            }
            else {
                body = <span className="btn" onClick={this.becomeFriend.bind(this, userArray[0].email)}>Become my friend!</span>
            }
            return( <div><h3>{userArray[0].email}</h3>
            {body}
            </div> )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

Login = connect((state) => state, mapDispatchToProps)(Login);

export default Login