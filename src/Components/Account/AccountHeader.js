import React, { Component } from 'react';
import './AccountHeader.scss';
import { connect } from 'react-redux';

class AccountHeader extends Component {
    
    handleClick = (e, mode) => {
        e.preventDefault();
        this.props.openModal(true, mode);
    }

    render() { 
        return (
            <div className="account-navigation-area">
                <div className="container">
                    <ul>
                        <li><a href="#login" onClick={(e) => this.handleClick(e, 'login')}>Login</a></li>
                        <li><a href="#signup" onClick={(e) => this.handleClick(e, 'signup')}>SignUp</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (behavior, mode) => { dispatch({ type: 'CONTROL_MODAL', behavior: behavior, mode: mode }) }
    }
}
 
export default connect(null, mapDispatchToProps)(AccountHeader);