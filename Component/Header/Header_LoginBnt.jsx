import React from 'react';
import { Component } from 'react';
import store from '../../src/store.js'



class Header_LoginBnt extends Component {
  state = {
    login_logout: false,
  }

  componentDidMount() {
    store.subscribe(function(){

      if(store.getState().user_id ==="") {
        this.setState({login_logout : false});
        console.log("로그아웃 된 상태임")
      }
      else if(store.getState().user_id != ""){
        this.setState({login_logout : true});
        console.log('로그인 된 상태임')
      }
    }.bind(this))
  }

  login_click = (e) => {
    store.dispatch({type:"LOGIN_PAGE"})
    //로그인 페이지가 나오게 해야함
  }

  logout_click = (e) => {
    //이 버튼을 누르면 로그아웃이 진행됨 
    console.log("로그아웃 시도 ")
    store.dispatch({type:"LOGOUT"})
    //ReactDom.render(<React.StrictMode><MemberCard></MemberCard></React.StrictMode>, document.querySelector('#section'));
    store.getState();
  }

  render() {
    return(
      <React.StrictMode>
        {this.state.login_logout === true ? <p id ="header_login" onClick = {this.logout_click}>로그아웃</p> : <p id ="header_login" onClick = {this.login_click}>로그인</p>}
      </React.StrictMode>
    ) 
  }
}

export default Header_LoginBnt;
