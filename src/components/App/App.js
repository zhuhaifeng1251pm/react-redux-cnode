import React, { Component } from "react";
import HomeContainer from "../../containers/HomeContainer";
import { connect } from "react-redux";
import { getTopics } from "../../action";
import Header from "../Header/Header";
import { BrowserRouter as Router ,Route,Redirect,Switch} from "react-router-dom";
import './app.scss'
import ArticleContainer from "../../containers/ArticleContainer";
import Usercontainer from "../../containers/Usercontainer";
import CreateTopic from "../CreateTopic";
import Footer from "../Footer";
import Error from "../Error";
import EditTopicContainer from "../../containers/EditTopicContainer";
import ShowUserReplyContainer from "../../containers/ShowUserReplyContainer";
import ShowUserTopicContainer from "../../containers/ShowUserTopicContainer";
import axios from "axios";
import {URI} from '../../constants/url'
import MessagesContainer from "../../containers/MessagesContainer";
class App extends Component {
  state={
    num:0
  }
  componentDidMount() {
    this.props.getTopics();
    const token =sessionStorage.token
    const uri=`${URI}/message/count/?accesstoken=${token}`
    if(token){
    axios.get(uri).then(res=>{
      console.log(res.data.data)
      this.setState({
        num:res.data.data
      })
    }).catch(err=>{})
  }
  }

  render() {
    const {login}=this.props
    const {num}=this.state
    return (
      <Router>
        <div className="app">
          <Header login={login} num={num}/>
          <Switch>
        <Route path='/' exact component={HomeContainer}  />
        <Route path='/topic/:id'  component={ArticleContainer}  />
        <Route path='/user/:loginname'  component={Usercontainer}/>
        <Route path='/topics/create' component={CreateTopic} />
        <Route path='/topics/edit' component={EditTopicContainer} />
        <Route path='/replies/:loginname' component={ShowUserReplyContainer}/>
        <Route path='/topics/:loginname' component={ShowUserTopicContainer}/>
        <Route path='/message' component ={MessagesContainer}/>
        <Route path="/404" exact component={Error}/>
        <Redirect from="/*" to="/404"/>
        </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {

  return  { login:state.login};
  
  };

export default connect(
  mapStateToProps,
  { getTopics}
)(App);
