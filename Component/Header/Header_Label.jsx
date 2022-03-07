import React from 'react'
import { Component } from 'react'
import store from '../../src/store.js'

class Header_Label extends Component {
  state = {

  }

  click = () => {
    store.dispatch({type:"HOME"})
  }

  render() {
    return(
      <p id ="header_label" onClick ={this.click}>GDSC</p> //메인 화면으로 전환 (section 태그를 메인 화면으로 변경)
    ) 
  }
}

export default Header_Label;
