import React from 'react';
import {Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../utils/validators';
import { Link} from 'react-router-dom';
import './styles/float-grid.css';
import './styles/login-form.css';


export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <section className="form-error" aria-live="polite">
          {this.props.error}
        </section>
      );
    }
    return (
      <section className="container row">
        <form className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <label htmlFor="username">Username</label>
          <Field component={Input} type="text" name="username" id="username" validate={[required, nonEmpty]}/>
          <label htmlFor="password">Password</label>
          <Field component={Input} type="password" name="password" id="password" validate={[required, nonEmpty]}/>
          <section className="row">
            <button className="col-12" disabled={this.props.pristine || this.props.submitting}>Log In</button>
            <Link className="col-12" to="/register">Sign Up!</Link>
          </section>
        </form>
      </section>
    );
  }
}

export default reduxForm({form: 'login', onSubmitFail: (errors, dispatch) => 
  dispatch(focus('login', 'username'))})(LoginForm);