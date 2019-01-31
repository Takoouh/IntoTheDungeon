import React from "react"
import { Field, reduxForm } from "redux-form"

let LoginForm = props => {
  const { handleSubmit } = props
  return <form className="logForm" onSubmit={handleSubmit}>
    <div>
      <Field name="email" component='input' type='email' placeholder="your email"></Field>
    </div>
    <div>
      <Field name="password" component='input' type='password' placeholder="your password"></Field>
    </div>
    <button type="submit">Log in</button>
  </form>
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm