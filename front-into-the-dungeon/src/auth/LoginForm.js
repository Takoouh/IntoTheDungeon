import React from "react"
import { Field, reduxForm } from "redux-form"

let LoginForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component='input' type='email'></Field>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component='input' type='password'></Field>
    </div>
    <button type="submit">Log in</button>
  </form>
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm