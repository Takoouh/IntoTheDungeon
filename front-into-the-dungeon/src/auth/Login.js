import React, { Component, Fragment } from "react"
import LoginForm from "./LoginForm"
import axios from "axios"
import { Link, withRouter } from "react-router-dom"
import { Row, Col } from "reactstrap"

class Login extends Component {
  submit = values => {
    axios.post('http://localhost:3010/auth/signin', values).then(results => {
      if (results) {
        console.log(results)
        localStorage.set("IntoTheDungeonJwt", results.data.token)
        this.props.history.push("/")
      }
    })
  }
  render() {
    return (
      <Row className="h-100 d-flex align-items-center">
        <Col xs={{ size: 6, offset: 3 }}>
          <LoginForm onSubmit={this.submit} />
          <Link to="/register">
            Don't have an account ? Register now !
        </Link>
        </Col>
      </Row >
    )
  }
}

export default withRouter(Login)