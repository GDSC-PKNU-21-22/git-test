import React from 'react'
import { Component } from 'react';

import Header_Label from '../Header/Header_Label';
import Header_ul from '../Header/Header_ul';
import Header_LoginBnt from '../Header/Header_LoginBnt';
import Header_JoinBnt from '../Header/Header_JoinBnt';


class Header extends Component {
  state = {

  }

  render() {
    return (
      <header id = "header">
        <Header_Label></Header_Label>
        <Header_JoinBnt></Header_JoinBnt>
        <Header_LoginBnt login_logout = "login"></Header_LoginBnt>
        <Header_ul></Header_ul>
      </header>
    )

  }
}

export default Header;
