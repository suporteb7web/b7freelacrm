import React, { Component } from 'react';
import style from './style.scss';

export class LoginField extends Component {

	constructor(props) {
		super(props);
		this.state = {
			on:false,
			inputValue:''
		};

		this.focusField = this.focusField.bind(this);
		this.unfocusField = this.unfocusField.bind(this);
		this.changeText = this.changeText.bind(this);
	}

	focusField() {
		this.setState({on:true});
		this.textInput.focus();
	}

	unfocusField() {
		if(this.state.inputValue.length == 0) {
			this.setState({on:false});
		}
	}

	changeText(e) {
		this.setState({inputValue:e.target.value});
		this.props.onChange(e.target.value);
	}

  render() {

  	let fieldClasses = ['login-field'];

  	if(this.state.on) {
  		fieldClasses.push('on');
  	}

    return (
    	<div className={fieldClasses.join(' ')} onClick={this.focusField}>
    		<label>{this.props.legend}</label>
    		<input ref={(input) => { this.textInput = input; }} type={this.props.type} name={this.props.name} onChange={this.changeText} onBlur={this.unfocusField} autofocus={this.state.on} />
    	</div>
      
    );
  }
}