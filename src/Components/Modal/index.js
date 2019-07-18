import React, { Component } from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';

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
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      afterOpenModal() {
        this.subtitle.style.color = '#f00';
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
              contentLabel="Example Modal"
            >
     
              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                {this.props.modalMode}
              </form>
            </Modal>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {  
      modalIsOpen: state.modalIsOpen,
      modalMode: state.modalMode
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      closeModal: (behavior) => { dispatch({ type: 'CONTROL_MODAL', behavior: behavior }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalUI);