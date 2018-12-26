import React, { Component } from "react"
import RegisterForm from "./RegisterForm";
import axios from "axios"
import ls from "local-storage"

class Register extends Component {
  submit = values => {
    axios.post('http://localhost:3010/auth/signup', values).then(results => {
      if (results) {
        ls.set("IntoTheDungeonJwt", results.data.token)
        this.props.history.push("/")
      }
    })
  }
  render() {
    return (
      <RegisterForm onSubmit={this.submit} />
    )
  }
}

export default Register