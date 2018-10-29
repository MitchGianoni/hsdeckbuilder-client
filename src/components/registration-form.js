import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { Link } from 'react-router-dom';
import './styles/registration-form.css';
import './styles/float-grid.css';
import { required, nonEmpty, matches, length, isTrimmed, validEmail } from '../utils/validators';
const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, email } = values;
    const user = { username, password, email };
    return this.props.dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="username">Username</label>
        <Field component={ Input } type="text" name="username" validate={[required, nonEmpty, isTrimmed]}/>
        <label htmlFor="email">Email</label>
        <Field component={ Input } type="text" name="email" validate={[required, nonEmpty, validEmail]}/>
        <label htmlFor="password">Password</label>
        <Field component={ Input } type="password" name="password" validate={[required, passwordLength, isTrimmed]}/>
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field component={ Input } type="password" name="passwordConfirm" validate={[required, nonEmpty, matchesPassword]}/>
        <section className="row">
          <button className="col-12" type="submit" disabled={this.props.pristine || this.props.submitting}>Register</button>
          <Link className="col-12" to="/">Back to Login</Link>
        </section>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);