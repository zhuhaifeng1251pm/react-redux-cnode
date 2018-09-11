import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URI } from "../../constants/url";
import { NavLink } from "react-router-dom";
import "./message.scss";
import { Button} from 'antd';
class Messages extends Component {
  state = {
    isRead: [],
    isNoRead: []
  };
  changeMarked=id=>{
    const uri=`${URI}/message/mark_one/${id}`
    const {token}=sessionStorage
    const {isNoRead}=this.state
    axios.post(uri,{accesstoken:token}).then(res=>{
      this.setState({
       isNoRead: isNoRead.filter(t=>t.id!==id)
      })

    }).catch(err=>{})
  }
  changeMarkedAll=()=>{
    const uri=`${URI}/message/mark_all`
    const {token}=sessionStorage
    axios.post(uri,{accesstoken:token}).then(res=>{
      this.setState({
       isNoRead: []
      })

    }).catch(err=>{})
  }
  handleAuthor = name => {
    this.props.showUser(name, this.props.history);
  };
  componentDidMount = () => {
    const token = sessionStorage.token;
    const uri = `${URI}/messages/?accesstoken=${token}`;
    if(token){
    axios
      .get(uri)
      .then(res => {
        console.log(res.data);
        this.setState({
          isRead: res.data.data.has_read_messages,
          isNoRead: res.data.data.hasnot_read_messages
        });
      })
      .catch(err => {});}
  };
  render() {
    const { name, img } = sessionStorage;
    const { isNoRead, isRead } = this.state;
    const isNoreadMessage = (
      <div className="isNoreadMessage">
        <div>
          <NavLink to={`/`} exact className="toHome">
            主页
          </NavLink>
          <span>/</span>
          <span>新消息</span>
          <Button type="primary" ghost onClick={this.changeMarkedAll} style={{display:isNoRead.length?'block':'none'}} >全部为已读？</Button>
        </div>
        <ul>
          {isNoRead.length ? (
            isNoRead.map(t => (
              <li key={t.id}>
                <div>
                  <NavLink to={`/user/${t.author.loginname}`} style={{marginRight:'10px'}}>
                    {t.author.loginname}
                  </NavLink>
                  回复了你的话题
                </div>
                <NavLink to={`/topic/${t.topic.id}`} className="title">
                  {t.topic.title}
                </NavLink>
                <Button type="primary" ghost onClick={()=>{this.changeMarked(t.topic.id)}} >标记为已读？</Button>
              </li>
            ))
          ) : (
            <div style={{lineHeight:'30px',padding:'10px',color:'#000',backgroundColor:'#fff'}}>无消息</div>
          )}
        </ul>
      </div>
    );
    const isReadMessage = isRead.length ? (
      <div className="isReadMessage ">
        <p>
          <span>过往的消息</span>
        </p>
        <ul>
          {isRead.length ? (
            isRead.map(t => (
              <li key={t.id}>
                <div>
                  <NavLink to={`/user/${t.author.loginname}`} style={{marginRight:'10px'}}>
                    {t.author.loginname}
                  </NavLink>
                  回复了你的话题
                </div>
                <NavLink to={`/topic/${t.topic.id}`} className="title">
                  {t.topic.title}
                </NavLink>
                <div style={{ display: t.type === "at" ? "block" : "none" }}>
                  <span>@</span>
                  <span>{name}</span>
                </div>
              </li>
            ))
          ) : (
            <div style={{lineHeight:'30px',padding:'10px',color:'#000',backgroundColor:'#fff'}}>无消息</div>
          )}
        </ul>
      </div>
    ) : (
      ""
    );
    return (
      <Wrap>
        <div className="left">
          {isNoreadMessage}
          {isReadMessage}
        </div>
        <div className="right">
          <p
            style={{
              color: "#51585c",
              padding: "10px",
              backgroundColor: "#f6f6f6",
              lineHeight: "20px"
            }}
          >
            <span>个人信息</span>
          </p>
          <NavLink to={`/user/${name}`}>
            {" "}
            <img
              style={{ width: "48px", height: "48px" }}
              src={img}
              alt=""
              onClick={() => {
                this.handleAuthor(name);
              }}
            />
          </NavLink>{" "}
          <span>{name}</span>
        </div>{" "}
      </Wrap>
    );
  }
}

export default Messages;
const Wrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .right {
    height: 200px;
  }
  ul {
    width: 100%;
    background-color: #fff;
    padding: 0;
    margin: 0;
    li {
      border-top: 1px solid #eee;
      line-height: 20px;
      padding: 10px 15px;
      display: flex;
      align-items: flex-start;

      .title {
        width: 300px;
        overflow: hidden;
        word-break: break-word;
        max-width: 460px;
        text-overflow: ellipsis;
        display: inline-block;
        vertical-align: middle;
        margin-left:10px;
      }
      .title:hover{
        text-decoration: underline;
        color: #005580;
      }
    }
  }
`;
