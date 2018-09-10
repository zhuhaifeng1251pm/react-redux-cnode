import React from 'react'
import { connect } from 'react-redux'
import  Home from '../components/Home' 
import {changeTab,getTopics,showUser} from '../action'
const HomeContainer = props => <Home {...props}/>
const mapStateToProps = state => {

return  { topics:state.topics,tab:state.tab ,page:state.page};

};

export default connect(mapStateToProps,{changeTab,getTopics,showUser})(HomeContainer);