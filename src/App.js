import React, { Component } from 'react';
// import Button from 'antd/es/button';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ModalUI from './Components/Modal/index';
import AccountHeader from './Components/Account/accountHeader';


class App extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
                <AccountHeader></AccountHeader>
                <ModalUI></ModalUI>
            </React.Fragment>
         );
    }
}
 
export default App;