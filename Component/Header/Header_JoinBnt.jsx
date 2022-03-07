import React from 'react';
import { Component } from 'react';

import store from '../../src/store.js'

class Header_JoinBnt extends Component {
  state = {
    login_logout: false,
  }

  componentDidMount() {
    store.subscribe(function(){
      if(store.getState().user_id ==="") {
        this.setState({login_logout : false});
        console.log("로그아웃 된 상태임")
      }
      else if(store.getState().user_id =! "") {
        this.setState({login_logout : true});
        console.log('로그인 된 상태임')
      }
    }.bind(this))
  }

  now_is_login =(e) => {
    //회원증을 시멘틱 태그 중 section 발급해줌
    store.dispatch({type:"ISSUING_CARD"})
  }

  now_is_logout = (e) => {
    //회원가입 화면을 시멘틱 태그 중 section에 뿌림
    console.log("회원가입 버튼 클릭 됨 ")
    store.dispatch({type:"JOIN"})
  }
  

  render() {
    return(
      <React.StrictMode>
        {this.state.login_logout === true ? <p id ="header_join" onClick = {this.now_is_login}>회원증 발급</p>:<p id ="header_join" onClick = {this.now_is_logout}>회원가입</p>}
      </React.StrictMode>
      
      
    ) 
  }
}

export default Header_JoinBnt;
