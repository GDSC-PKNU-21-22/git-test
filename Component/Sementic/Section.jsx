import React from 'react'
import { Component } from 'react'
import store from '../../src/store.js'

import LoginPage from '../LoginPage.jsx';
import JoinPage from '../JoinPage.jsx';
import MemberCard from '../MemberCard.jsx'



class Section extends Component {
  state = {
    status:"HOME",
    render_Tag:<center><p>Main Home(로그아웃 상태)</p></center>,

  }

  componentDidMount() {
    store.subscribe(function() {
      //로그인이 된 상태에서 메인 홈 
      if(store.getState().section_status === "HOME" && store.getState().user_id != "") {
        this.setState({status : "LOGING_HOME"});
      }
      else if(store.getState().section_status === "HOME" && store.getState().user_id ==="") {
        this.setState({status : "LOGOUT_HOME"});
      }
      else if(store.getState().section_status === "LOGIN_PAGE") {
        this.setState({status: "LOGIN_PAGE"})
      }
      else if(store.getState().section_status === "JOIN") {
        this.setState({status : "JOIN"});
      }
      else if(store.getState().section_status === "ISSUING_CARD") {
        this.setState({status : "ISSUING_CARD"})
      }
    }.bind(this))
  }
  
  tag = <center><p>Main Home(로그아웃 상태)</p></center>;
  setRender_tag = (value) => { this.tag = value; }

  shouldComponentUpdate(prevProps, prevState) {
    if(prevState.status === "LOGING_HOME") {
      this.setRender_tag(<center><p>Hi, {store.getState().name}</p></center>);
      return true;
    }
    else if(prevState.status === "LOGOUT_HOME") {
      this.setRender_tag(<center><p>Main Home(로그아웃 상태)</p></center>);
      return true;
    }
    else if(prevState.status === "LOGIN_PAGE") {
      this.setRender_tag(<LoginPage></LoginPage>);
      return true;
    }
    else if(prevState.status === "JOIN") {
      this.setRender_tag(<JoinPage></JoinPage>);
      return true;
    }
    else if(prevState.status === "ISSUING_CARD") {
      this.setRender_tag(<MemberCard></MemberCard>);
      return true;
    }
  }
  
  componentDidUpdate () {
    if(this.state.status === "ISSUING_CARD") {
      store.getState().Timer_ON();
    }    
  }

  render() {
    return(
      <section id ="section">
        <center>{this.tag}</center> 
      </section>
    ) 

  }
}

export default Section;

