import React from 'react'
import { connect } from 'react-redux'
import {showMessage,updateMessage}from '../action/index'


import  Messages from '../components/message/Messages' 

const MessagesContainer = props => <Messages {...props}/>
//component,为需要展示的组件的名字，记得要在上面import
const mapStateToProps = state => {

    return  { message:state.message };
    
    };
    


export default connect(mapStateToProps,{showMessage,updateMessage})(MessagesContainer);