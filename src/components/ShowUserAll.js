import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Time from "./Time";
import styled from "styled-components";
class ShowUserAll extends Component {
  handleAuthor=(name) => {
    this.props.showUser(name)
}
    componentDidMount = () => {  
        this.props.showUser(this.props.match.params.loginname,this.props.history)
         
      }
    render() {
        const { user } = this.props;
    console.log(user);
    const useru=user?user.data.loginname:''
    const userimg=user?user.data.avatar_url:''
    const listss = user ? (
      <ul>
        {user.data.recent_replies.slice(0, 5).map(reply => (
          <li key={reply.id}>
            <img
              src={reply.author.avatar_url}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
            <span className="box1">
              <span style={{color:'#9e78c0',fontSize:"14px",fontWeight:'bold',    wordBreak: 'break-word'}}>20</span>
              <span style={{color:'#999',fontSize:'10px'}}>/1000</span>
            </span>
            <NavLink to={`/topic/${reply.id}`} className="show">{reply.title}</NavLink>
            <span className="time">
              <Time time={reply.last_reply_at} />
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <span>无</span>
    );

    const lists = user ? (
      <ul>
        {user.data.recent_topics.map(topic => (
          <li key={topic.id}>
            <img
              src={topic.author.avatar_url}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
            <span className="box1">
              <span style={{color:'#9e78c0',fontSize:"14px",fontWeight:'bold',    wordBreak: 'break-word'}}>20</span>
              <span style={{color:'#999',fontSize:'10px'}}>/1000</span>
            </span>
            <NavLink to={`/topic/${topic.id}`} className="show">{topic.title}</NavLink>
            <span className="time">
              <Time time={topic.last_reply_at} />
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <span>无</span>
    );
        return (
            <Wrap>
                <div className="left">
                <p><NavLink to={`/`} className="toLink" >主页</NavLink><span>/</span><NavLink to={`/user/${useru}`} className="toLink" >{`${useru}主页`}</NavLink></p>
                <p>{`${useru} 创建的话题`}</p>
                <div>
                {lists}
                <p>{`${useru} 参与的话题`}</p>
                {listss}</div>
                </div>
            <div className="right">
            <NavLink to={`/user/${useru}`}>  <img style={{width:'48px',height:'48px'}}src={userimg} alt="" onClick={()=>{this.handleAuthor(useru)}}/></NavLink> <span>{useru}</span></div>
            </Wrap>
        );
    }
}

export default ShowUserAll;
const Wrap = styled.div`
width:1200px;
margin:0 auto;
margin-top: 15px;
display:flex;
.left{
p{
    width:900px;
    height:40px;
    padding: 10px;
    background-color: #f6f6f6;
    line-height: 20px;
    border-radius: 3px 3px 0 0;
    font-size:14px;
}

   .toLink{ color: #80bd01;
    margin:0 5px;
    font-size:14px;}
    .toLink:hover{
    text-decoration:underline;}

p:nth-child(2){
    margin-bottom:0;
    color: #333;
    
}
div{
    width:900px;
    background-color:#fff;
    p{
        width:100%;
        height:40px;
        padding:10px;
        margin-bottom:0;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
    }
    ul{
        margin:0;
        padding:0;
        padding-left:10px;
    }
    li{ width:100%;
        height:50px;
        display:flex;
        align-items: center;
        padding-right: 10px;
        background: #fff;
        border-top: 1px solid #f0f0f0;
        .box1{
          margin-left:10px;
          margin-right:10px;
        }
        .show{
          margin-left:20px;
          width:500px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          font-size: 16px;
    line-height: 30px

        }
        .showfocus, a:hover {
          color: #005580;
          text-decoration: underline;
      }
        .time{
          width:200px;
          display:flex;
          justify-content: flex-end;
          margin-left:60px;
        }

    }
}
    
.show-all{
  background-color:#fff;
  color:#000;
}
.show-all:hover{
  color: #385f8a;
}
}
}
.right{
    height:200px;
}
`;

