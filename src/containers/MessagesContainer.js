import React from 'react'
import { connect } from 'react-redux'
import {showUser}from '../action/index'


import  Messages from '../components/message/Messages' 
const MessagesContainer = props => <Messages {...props}/>
//component,为需要展示的组件的名字，记得要在上面import


export default connect(null,{showUser})(MessagesContainer);