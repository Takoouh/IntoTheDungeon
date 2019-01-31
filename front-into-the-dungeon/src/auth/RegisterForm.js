import React from "react"
import { Field, reduxForm } from "redux-form"

let RegisterForm = props => {
  const { handleSubmit } = props
  return <form className="logForm" onSubmit={handleSubmit}>
    <div>
      <Field name="email" component='input' placeholder="your email" type='email'></Field>
    </div>
    <div>
      <Field name="name" component='input' placeholder="your username" type='text'></Field>
    </div>
    <div>
      <Field name="password" component='input' placeholder="your password" type='password'></Field>
    </div>
    <button type="submit">Register</button>
  </form>
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm)

export default RegisterForm