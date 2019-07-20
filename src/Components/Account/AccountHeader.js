import React, { Component } from 'react';
import './AccountHeader.scss';
import { connect } from 'react-redux';
import { modalAction } from '../../Reducers/actions/modalAction';


class AccountHeader extends Component {
    
    handleClick = (e, mode) => {
        e.preventDefault();
        this.props.openModal(true, mode);
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.signOut();
    }

    render() {
        let data = (this.props.loginStatus === false) ? 
                <ul>
                    <li><a href="#login" onClick={(e) => this.handleClick(e, 'login')}>Login</a></li>
                    <li><a href="#signup" onClick={(e) => this.handleClick(e, 'signup')}>SignUp</a></li>
                </ul>
            : 
                <ul>
                    <li><a href="#logout" onClick={(e) => this.handleLogout(e)}>Logout</a></li>
                </ul>
            ;
        return (
            <div className="account-navigation-area">
                <div className="container">
                   {data}     
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.authReducer.loginStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (behavior, mode) => { dispatch(modalAction(behavior, mode)) },
        // signOut: () => { dispatch(signOut()) } 
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AccountHeader);