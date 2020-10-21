import React, { Component } from "react";
import { FormErrors } from "./FormErrors";

class FormValidations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "", 
            formErrors: {
                username: "", 
                password: ""
            }, 
            usernameValid: false, 
            passwordValid: false, 
            formValid: false
        }
    }


    handleUserInput = (typeEvent) => {
        const fieldName = typeEvent.target.name;
        const fieldValue = typeEvent.target.value;

        this.setState({
            [fieldName]: fieldValue
        }, () => this.validateField(fieldName, fieldValue))
    }

    validateField(fieldName, fieldValue) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case "username":
                usernameValid = fieldValue.match(/^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/);
                fieldValidationErrors.username = usernameValid ? "" : " is inValid!";
                break;
            case "password": 
                passwordValid = fieldValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
                fieldValidationErrors.password = passwordValid ? "" : " is inCorrect!";
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors, 
            usernameValid: usernameValid, 
            passwordValid: passwordValid
        }, this.validateForm)
    }

    validateForm() {
        this.setState({
            formValid: this.state.usernameValid && this.state.passwordValid
        })
    }

    render() {
        return(
            <div className = "row">
                <div className = "col-sm-12">
                    <hr />

                    <h4>formValidation :: instantFieldErrorCheck</h4>

                    <hr />

                    <form className = "">
                        <fieldset className = "form-group">
                            <div className = "card">
                                <div className = "card-body">
                                    <FormErrors formErrors = {this.state.formErrors} />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className = "form-group">
                            <label for = "username">Username</label>
                            <input 
                                type = "text" 
                                name = "username" 
                                className = "form-control" 
                                placeholder = "" 
                                required 
                                value = {this.state.username} 
                                onChange = {this.handleUserInput} />
                        </fieldset>
                        <fieldset className = "form-group">
                            <label for = "password">Password</label>
                            <input 
                                type = "text" 
                                name = "password" 
                                className = "form-control" 
                                placeholder = "" 
                                required 
                                value = {this.state.password} 
                                onChange = {this.handleUserInput} />
                        </fieldset>
                        <fieldset className = "form-group">
                            <button 
                                type = "submit" 
                                className = 'btn btn-primary'
                                disabled = {!this.state.formValid}>submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormValidations;