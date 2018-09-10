import React from 'react'
import { connect } from 'react-redux'
import { changeCollect ,changeGoodNum,changeDecollect,addComment,showUser} from "../action/index";

import  Article from '../components/Article' 
const ArticleContainer = props => <Article {...props}/>
//component,为需要展示的组件的名字，记得要在上面import
const mapStateToProps = state => {

return  { article:state.article,login:state.login};

};

export default connect(mapStateToProps,{changeCollect,changeGoodNum,changeDecollect,addComment,showUser})(ArticleContainer);