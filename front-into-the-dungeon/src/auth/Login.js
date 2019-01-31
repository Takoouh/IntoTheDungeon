import React, { Component } from "react"
import LoginForm from "./LoginForm"
import axios from "axios"
import { withRouter } from "react-router-dom"

import "./auth.scss"

class Login extends Component {
  submit = values => {
    axios.post('http://localhost:3010/auth/signin', values).then(results => {
      if (results) {
        console.log(results)
        localStorage.setItem("IntoTheDungeonJwt", results.data.token)
        this.props.history.push("/")
      }
    })
  }
  render() {
    return (
      <LoginForm onSubmit={this.submit} />
    )
  }
}

export default withRouter(Login)