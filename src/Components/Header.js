import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {

  onLogin(){
    this.props.onLogin();
  }
  onLogout(){
    this.props.onLogout();
  }


  render(){
    let page;
    if(this.props.idToken){
      page = <Navbar.Brand onClick={this.onLogout.bind(this)} href="#">Logout</Navbar.Brand>
    }else{
      page = <Navbar.Brand onClick={this.onLogin.bind(this)} href="#">Login</Navbar.Brand>
    }
    return (
      <Navbar>
          <Navbar.Brand>
            Github Searcher
          </Navbar.Brand>
          <Nav>
            {page}
          </Nav>
      </Navbar>
    );
  }
}

export default Header;
