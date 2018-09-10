import React from 'react'
import { connect } from 'react-redux'
import { showUser } from "../action/index";


import  ShowUserAll from '../components/ShowUserAll' 
const ShowUserReplyContainer = props => <ShowUserAll {...props}/>
//component,为需要展示的组件的名字，记得要在上面import
const mapStateToProps = state => {

return  { user:state.user };

};

export default connect(mapStateToProps,{showUser})(ShowUserReplyContainer);