import React from "react"
import { Field, reduxForm } from "redux-form"

let RegisterForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component='input' type='email'></Field>
    </div>
    <div>
      <label htmlFor="name">Username</label>
      <Field name="name" component='input' type='text'></Field>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component='input' type='password'></Field>
    </div>
    <button type="submit">Register</button>
  </form>
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm)

export default RegisterForm