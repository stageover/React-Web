import React, { Component } from 'react';
// import Button from 'antd/es/button';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ModalUI from './Components/Modal/index';
import AccountHeader from './Components/Account/AccountHeader';

// function Index() {
//     return <h2>Home</h2>;
//   }
  
//   function About() {
//     return <h2>About</h2>;
//   }
  
//   function Users() {
//     return <h2>Users</h2>;
//   }

class App extends Component {
    state = {  }

    render() { 
        return ( 
            <React.Fragment>
                <AccountHeader></AccountHeader>
                {/* <Router>
                     <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>
                    https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
                    <Route path="/" exact component={Index} /> 
                </Router> */}
                <ModalUI></ModalUI>
            </React.Fragment>
         );
    }
}
 
export default App;