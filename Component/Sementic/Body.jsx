import React from 'react'
import { Component } from 'react'

import Header from './Header.jsx'
import Section from './Section.jsx'
import Footer from './Footer.jsx'



class Body extends Component {
  render() {
    return(
      <React.StrictMode>
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
      </React.StrictMode>
    )
  }
} 

export default Body;