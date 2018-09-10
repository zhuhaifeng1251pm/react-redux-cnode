import React, { Component } from "react";
import Time from "../Time";
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import './user.scss'
import ShowCreatelist from "../ShowCreatelist";
import ShowJoinlists from "../ShowJoinlists";
class User extends Component {
  handleAuthor=(name) => {
    this.props.showUser(name,this.props.history)
}
  componentDidMount = () => {  
    this.props.showUser(this.props.match.params.loginname,this.props.history)
     
  }
  render() {
    const { user} = this.props;
    console.log(user);
    const useru=user?user.data.loginname:''
    const userimg=user?user.data.avatar_url:''
    const toShowUser = user?
      <div className="homepage"><p>
        <NavLink to={`/`} exact className="toHome">
          主页
        </NavLink>
        <span>/</span>
        </p>
        <ul>
          <li>
           <NavLink to={`/user/${user.data.loginname}`}> <img src={user.data.avatar_url
} alt="" /></NavLink>
            <span>{user.data.loginname}</span>
          </li>
          <li>{user.data.score
}积分</li>
          <li><i className="fa fa-lg fa-fw fa-github"></i>
              <a href={`https://github.com/${user.data.githubUsername}`}>{`@${user.data.githubUsername}`}</a></li>
          <li>
            注册时间<Time time={user.data.create_at
}/>
          </li>
        </ul>
      </div>:<span>加载中。。。。。</span>
  
    return <Wrap>
      <div className="left">
    {toShowUser}
    <ShowCreatelist user={user}  />
    <ShowJoinlists user={user}  />
    </div>
    <div className="right">
        <p style={{color: '#51585c',padding: '10px',backgroundColor: '#f6f6f6',lineHeight: '20px'}}><span>个人信息</span></p>
            <NavLink to={`/user/${useru}`}>  <img style={{width:'48px',height:'48px'}}src={userimg} alt="" onClick={()=>{this.handleAuthor(useru)}}/></NavLink> <span>{useru}</span></div>
        </Wrap>;
  }
}

export default User;
const Wrap=styled.div`
  width:1200px;
  margin: 0 auto;
  display:flex;
  .right{
    height:200px;
  }

`