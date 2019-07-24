import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAction } from '../../Reducers/actions/authAction';

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Button,
    Alert
  } from 'antd';
  
  const { Option } = Select;

  
  class RegistrationForm extends Component {
    state = {
      confirmDirty: false
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.submitForm(values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
  
    render() {
      const { getFieldDecorator } = this.props.form;

  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '63',
      })(
        <Select style={{ width: 70 }}>
          <Option value="63">+63</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label={
              <span>
                Fullname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('fullname', {
              rules: [{ required: true, message: 'Please input your fullname!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="E-mail">
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
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phonenumber', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
          { this.props.success ? 
              <Alert message={this.props.success} type="success" /> :
            this.props.error ?
              <Alert message={this.props.error} type="error" /> : ''
          }
        </Form>
      );
    }
  }
  

const mapStateToProps = (state) => {
    return {
        success: state.authReducer.authSuccess,
        error: state.authReducer.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (userdetails) => { dispatch(signupAction(userdetails)) }
    }
}

const SignupForm = Form.create({ name: 'register' })(RegistrationForm);
 
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);