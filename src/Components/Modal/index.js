import React, { Component } from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';

import LoginForm from '../Authentication/loginForm';
import { modalAction } from '../../Reducers/actions/modalAction';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
   
Modal.setAppElement(document.getElementById('root'));

class ModalUI extends Component {
    constructor() {
        super();
        this.closeModal = this.closeModal.bind(this);
      }
    
      closeModal() {
          this.props.closeModal(false);
      }

      render() {
        return (
          <div>
            <Modal
              isOpen={this.props.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
            >
                <a href="#close" onClick={this.closeModal}>x</a>
                <div>{<LoginForm></LoginForm>}</div>
            </Modal>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {  
      modalIsOpen: state.modalReducer.modalIsOpen,
      modalMode: state.modalReducer.modalMode
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      closeModal: (behavior) => { dispatch( modalAction(behavior) ) 
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUI);