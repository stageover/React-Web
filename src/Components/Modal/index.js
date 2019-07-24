import React, { Component } from 'react';

import { connect } from 'react-redux';

import LoginForm from '../Authentication/loginForm';
import SignupForm from '../Authentication/signupForm';
import ForgotPasswordForm from '../Authentication/forgotPasswordForm';

import { modalCloseAction } from '../../Reducers/actions/modalAction';

import { Modal, Form } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(

  class extends Component {

    handleForm(mode) {
      switch(mode) {
          case 'login':
           return <LoginForm></LoginForm>
          case 'signup':
           return <SignupForm></SignupForm>
          case 'forgot-password':
            return <ForgotPasswordForm></ForgotPasswordForm>
          default :
            return 'Modal'
      } 
    }

    render() {
      
      const { visible, onCancel, mode, title } = this.props;
      return (
        <Modal
          visible={visible}
          title={title}
          onCancel={onCancel}
          footer={null}
        >
          { this.handleForm(mode) }
        </Modal>
      );
    }
  },
);

class ModalUI extends Component {

  handleCancel = () => {
    this.props.modalClose();
  };

  render() {
    return (
      <div>
        <CollectionCreateForm
          visible={this.props.modalIsOpen}
          onCancel={this.handleCancel}
          mode={this.props.modalMode}
          title={this.props.modalTitle}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
    return {  
      modalIsOpen: state.modalReducer.modalIsOpen,
      modalMode: state.modalReducer.modalMode,
      modalTitle: state.modalReducer.modalTitle
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      modalClose: () => { dispatch( modalCloseAction() ) 
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUI);