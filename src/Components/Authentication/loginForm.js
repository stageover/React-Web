import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction }  from '../../Reducers/actions/authAction';

const INITIAL_STATE = {
    email: '',
    password: ''
};

class LoginForm extends Component {
    state = { ...INITIAL_STATE }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.submitForm(credentials);
        
    }

    render() { 

        const { email, password } = this.state;
        const isInvalid = password === '' || email === '';
        let error = (this.props.error);

        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    placeholder="Email Address"
                    autoComplete="on"
                    />
                </div>
                <div>
                    <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    />
                </div>

                <button disabled={isInvalid} type="submit">Sign In</button>
                <p>{ error }</p>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.authReducer.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (credentials) => { dispatch(loginAction(credentials)) }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);