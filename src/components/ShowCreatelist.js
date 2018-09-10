import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import styled from "styled-components";
class ShowCreatelist extends Component {
  render() {
    const { user } = this.props;
    console.log(user);
    const useru=user?user.data.loginname:''
    const lists = user ? (
      <ul>
        {user.data.recent_topics.slice(0, 5).map(topic => (
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
            <NavLink to={`/topic/${topic.id}`} className="show-topic">{topic.title}</NavLink>
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
        <div>
          <p>最近创建的话题</p>
          {lists}
          <p><NavLink to={`/topics/${useru}`} className="show-all">查看更多>></NavLink></p>
        </div>
      </Wrap>
    );
  }
}

export default ShowCreatelist;
const Wrap = styled.div`
width:900px;
margin:0 auto;
margin-top: 15px;
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
        margin-bottom:10px;
        align-items: center;
        padding-right: 10px;
        background: #fff;
        border-top: 1px solid #f0f0f0;
        .box1{
          margin-left:10px;
          margin-right:10px;
        }
        .show-topic{
          margin-left:20px;
          width:500px;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          font-size: 16px;
    line-height: 30px

        }
        .show-topic:focus, a:hover {
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

`;
