import React, { Component } from 'react';

import './loginForm.scss';

import { connect } from 'react-redux';
import { loginAction }  from '../../Reducers/actions/authAction';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class AuthForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            this.props.submitForm(values);
        }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit={this.handleSubmit} className="login-form" id="RegisterComponent">
            <Form.Item>
                {getFieldDecorator('email', {
                rules: [
                    {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                    },
                    {
                    required: true,
                    message: 'Please input your E-mail!',
                    },
                ],
                })(
                <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="E-Mail"
                    onChange={this.onChange}
                    autoComplete="on"
                />
                )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                />,
            )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="#forgot-password">
                    Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="#signup">register now!</a>
            </Form.Item>
            {this.props.error}
        </Form>
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

const LoginForm = Form.create({ name: 'normal_login' })(AuthForm);
 
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);