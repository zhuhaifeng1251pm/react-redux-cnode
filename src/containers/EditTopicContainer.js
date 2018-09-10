import React from 'react'
import { connect } from 'react-redux'
import { showUser } from "../action";

import  EditTopic from '../components/EditTopic/EditTopic' 
const EditTopicContainer = props => <EditTopic {...props}/>
//component,为需要展示的组件的名字，记得要在上面import
const mapStateToProps = state => {

return  { user:state.user };

};

export default connect(mapStateToProps,{showUser})(EditTopicContainer);