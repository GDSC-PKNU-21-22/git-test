import React from 'react'
import { Component } from 'react';
import Header_li_1 from './Header_li_1'
import Header_li_2 from './Header_li_2'
import Header_li_3 from './Header_li_3'
import Header_li_4 from './Header_li_4'

class Header_ul extends Component {
  state = {

  }

  render() {
    return (
      <ul id ="header_ul">
        <Header_li_1></Header_li_1>
        <Header_li_2></Header_li_2>
        <Header_li_3></Header_li_3>
        <Header_li_4></Header_li_4>
        
      </ul>

    )

  }
}

export default Header_ul;
