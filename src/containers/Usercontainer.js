import React from 'react'
import { connect } from 'react-redux'
import {showUser}from '../action/index'
import  User from '../components/User/User' 
const Usercontainer = props => <User {...props}/>
const mapStateToProps = state => {
return{ user:state.user };

};

export default connect(mapStateToProps,{showUser})(Usercontainer);