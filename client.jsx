import React from 'react'
import ReactDom from 'react-dom'



import Body from './Component/Sementic/Body.jsx'
import {Provider} from 'react-redux'
import store from './src/store.js'


ReactDom.render(<Provider store = {store}><Body></Body></Provider>, document.querySelector('#root'));




