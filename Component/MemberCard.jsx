import React from 'react'
import { Component } from 'react'
import store from '../src/store'

class MemberCard extends Component {
  state = {

  }
  
  

  render() {
    return(
      <React.StrictMode>
        <article id="MemberCard_component">
          <center><img id="MemberCard_img1" src ="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_KzUurne.png" width="350px"></img></center>
          {/* <img id ="MemberCard_img2" src="https://developers.google.com/profile/badges/community/dsc/2021/speaker/badge.svg" width="100px"></img> */}
          {/* <img src="https://developers.google.com/profile/badges/community/dsc/2021/core_member/badge.svg"></img> */}
          <center id ="MemberCard_where">CAFE WITH</center>
          <center id ="MemberCard_name">{store.getState().name}</center>
          <center id ="CTime"></center>
          <div>

          </div>
        </article>
      </React.StrictMode>
    )
  }
}

export default MemberCard;
