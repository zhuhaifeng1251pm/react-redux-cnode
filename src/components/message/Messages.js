import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URI } from "../../constants/url";
import { NavLink } from "react-router-dom";
import "./message.scss";
class Messages extends Component {
  state = {
    isRead: [],
    isNoRead: []
  };
  handleAuthor = name => {
    this.props.showUser(name, this.props.history);
  };
  componentDidMount = () => {
    const token = sessionStorage.token;
    const uri = `${URI}/messages/?accesstoken=${token}`;
    axios
      .get(uri)
      .then(res => {
        console.log(res.data);
        this.setState({
          isRead: res.data.data.has_read_messages,
          isNoRead: res.data.data.hasnot_read_messages
        });
      })
      .catch(err => {});
  };
  render() {
    const { name, img } = sessionStorage;
    const { isNoRead, isRead } = this.state;
    const isNoreadMessage = (
      <div className="isNoreadMessage">
        <p>
          <NavLink to={`/`} exact className="toHome">
            主页
          </NavLink>
          <span>/</span>
          <span>新消息</span>
        </p>
        <ul>
          {isNoRead.length ? (
            isNoRead.map(t => (
              <li key={t.id}>
                <div>
                  <NavLink to={`/user/${t.author.loginname}`}>
                    {t.author.loginname}
                  </NavLink>
                  回复了你的话题
                </div>
                <NavLink to={`/topic/${t.topic.id}`} className="title">
                  {t.topic.title}}
                </NavLink>
              </li>
            ))
          ) : (
            <span>无消息</span>
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
                  <NavLink to={`/user/${t.author.loginname}`}>
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
            <span>无消息</span>
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
      height: 42px;
      padding: 10px 15px;
      display: flex;
      align-items: center;

      .title {
        width: 300px;
        overflow: hidden;
        word-break: break-word;
        max-width: 460px;
        text-overflow: ellipsis;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
`;
