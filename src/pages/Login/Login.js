import React, { Component } from 'react';
import { Link } from "react-router-dom";
import style from './style.scss';

import { LoginField } from '../../components/LoginField';


export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		};

		this.emailChange = this.emailChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
	}

	emailChange(email) {
		this.setState({email});
	}

	passwordChange(password) {
		this.setState({password});
	}

  render() {
    return (
      <section class="login-area">
      	<div class="login-form">
      			
      		<div class="login-info">
      			Seja bem vindo, faça login na sua conta.
      		</div>

      		<form method="POST">
      			<LoginField
      				legend="Seu e-mail"
      				name="email"
      				value={this.state.email}
      				onChange={this.emailChange}
      			/>
      			<LoginField
      				legend="Sua senha"
      				name="password"
      				value={this.state.password}
      				onChange={this.passwordChange}
      			/>
      		</form>

      	</div>
      	<div class="login-banner"></div>
      </section>
    );
  }
}