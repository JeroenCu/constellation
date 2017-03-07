import React, { Component } from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import * as Actions from './../store/actions'
import FacebookLogin from 'react-facebook-login'

class Login extends Component {
    submitLogin() {
        let userEmail = this.refs.userEmail.value
        let userPassword = this.refs.userPassword.value
        this.props.actions.localLogin(userEmail, userPassword)
    }

    submitSignup() {
        let userEmail = this.refs.userEmail.value
        let userPassword = this.refs.userPassword.value
        this.props.actions.localSignup(userEmail, userPassword)
    }

    responseFacebook(response) {
        let userEmail = response.email
        let userId = response.id + ""
        this.props.actions.fbLogin(userEmail, userId)
    }

    render() {
        let error = ""
        if (_.has(this.props.displayError, 'login')) {
            error = this.props.displayError.login
        }
        return <div className="login-form">
                <span className="error">{error}</span>
                <input type="text" name="email" placeholder="email..." ref="userEmail"/>
                <input type="password" name="password" ref="userPassword"/>
                <span className="btn" onClick={this.submitLogin.bind(this)}>LOG IN</span>
                <span className="btn" onClick={this.submitSignup.bind(this)}>SIGN UP</span>
                <FacebookLogin
                    appId="160384617807681"
                    autoLoad={false}
                    fields="name,email"
                    callback={this.responseFacebook.bind(this)} />
            </div>
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

Login = connect((state) => state, mapDispatchToProps)(Login);

export default Login