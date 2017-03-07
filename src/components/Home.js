import React, { Component } from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import * as Actions from './../store/actions'
import {Link} from 'react-router'

class Home extends Component {
    componentWillMount() {
        this.props.actions.getUsers(this.props.loggedIn)
    }

    render() {
        if (!this.props.loggedIn) {
            return(<Login />)
        }
        else return(
            <div>
            <h2>Home Galaxy</h2>
            {this.props.userList.map((el, i) => {
                let key = `user${i}`
                let href = `/Home/${el.email}`
                return( <span key={key}><Link activeClassName="active" to={href}>{el.email}</Link><br /></span> )
            })}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

Home = connect((state) => state, mapDispatchToProps)(Home);

export default Home