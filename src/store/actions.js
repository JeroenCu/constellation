import axios from 'axios'

export const tokenReceived = (token) => ({type: "TOKEN_RECEIVED", payload: token})
export const errorReceived = (error, tag) => ({type: "ERROR_RECEIVED", payload: error, tag: tag})
export const usersReceived = (users) => ({type: "USERS_RECEIVED", payload: users})

export const localLogin = (email, password) => {
    return (dispatch) => {
        return axios.post("http://lowcost-env.pf6n8zcfm8.eu-central-1.elasticbeanstalk.com/login",
        {email: email, password: password})
        .then(
            (data) => {
                if (data.data.error) {
                    dispatch(errorReceived(data.data.error, "login"))
                }
                else {
                    dispatch(tokenReceived(data.data))
                }
            }
        )
    }
}

export const localSignup = (email, password) => {
    return (dispatch) => {
        return axios.post("http://lowcost-env.pf6n8zcfm8.eu-central-1.elasticbeanstalk.com/signup",
        {email: email, password: password})
        .then(
            (data) => {
                if (data.data.error) {
                    dispatch(errorReceived(data.data.error, "login"))
                }
                else {
                    dispatch(tokenReceived(data.data))
                }
            }
        )
    }
}

export const fbLogin = (email, id) => {
    return (dispatch) => {
        return axios.post("http://lowcost-env.pf6n8zcfm8.eu-central-1.elasticbeanstalk.com/fbLogin",
        {email: email, id: id})
        .then(
            (data) => {
                if (data.data.error) {
                    dispatch(errorReceived(data.data.error, "login"))
                }
                else {
                    dispatch(tokenReceived(data.data))
                }
            }
        )
    }
}

export const getUsers = (token) => {
    return (dispatch) => {
        return axios.get("http://lowcost-env.pf6n8zcfm8.eu-central-1.elasticbeanstalk.com/users", {headers: {'Authorization': 'Bearer ' + token}})
            .then((data) => {
                if (data.data.error) {
                    dispatch(errorReceived(data.data.error, "user-list"))
                }
                else {
                    dispatch(usersReceived(data.data))
                }
            })
    }
}

export const becomeFriend = (token, email) => {
    console.log("friendship")
    return (dispatch) => {
        return axios.post("http://lowcost-env.pf6n8zcfm8.eu-central-1.elasticbeanstalk.com/addFriend", {headers: {'Authorization': 'Bearer ' + token}, body: {'friendEmail': email}})
            .then((data) => {
                console.log(data)
                dispatch(getUsers(token))
            })
    }
}