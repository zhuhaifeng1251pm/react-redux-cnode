import React, { Component } from "react";
import Quill from "quill";
import "../../../node_modules/quill/dist/quill.snow.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { URI } from "../../constants/url";
import "./editTopic.scss";
class EditTopic extends Component {
  handleChange() {
    this.setState({ value: this.editor.root.innerText });
  }
  handleText = event => {
    this.setState({
      areaValue: event.target.value
    });
  };
  handleSelect = event => {
    this.setState({
      selectValue: event.target.value
    });
  };
  handleEdit = id => {
    const uri = `${URI}/topic/${id}`;
    axios
      .get(uri)
      .then(res => {
        console.log(res.data);
        this.editor.root.innerText = res.data.data.content.replace(`<div class="markdown-text"><p>`,'');
        this.setState({
          areaValue: res.data.data.title,
          value: this.editor.root.innerText.replace('</p>', '').replace('</div>', ''),
          selectValue:res.data.data.tab
        });
      })
      .catch(err => {});
  };
  handleSubmits = id => {
    const { value, areaValue,selectValue } = this.state;
    const token = sessionStorage.token;
    const uri = `${URI}/topics/update`;
    axios
      .post(uri, {
        accesstoken: token,
        topic_id: id,
        title: areaValue,
        tab: selectValue,
        content: value
      })
      .then(res => {
        console.log(res.data);
        alert("修改成功");
        this.setState({
          value: "",
          selectValue: "",
          areaValue: ""
        });
      })
      .catch(err => {});
  };
  constructor() {
    super();
    this.state = {
      value: "",
      areaValue: "",
      selectValue: ""
    };
    this.editor = null;
  }
  componentDidMount = () => {
    this.props.showUser(sessionStorage.name);
    const textbox = this.refs.textarea;
    const options = {
      debug: "log",
      modules: {
        toolbar: true
      },
      placeholder: "请输入文本...",
      readOnly: false,
      theme: "snow"
    };
    const editor = (this.editor = new Quill(textbox, options));
    const { value } = this.state;
    if (value) editor.clipboard.dangerouslyPasteHTML(value);
    editor.on("text-change", this.handleChange.bind(this));
  };

  render() {
    const { areaValue, selectValue, inputValue } = this.state;
    const { user } = this.props;
    console.log(this.props);
    const showTopics = user ? (
      <div>
        <p>详情</p>
        <div className="box3">
          <NavLink to={`/user/${sessionStorage.name}`}>
            <img
              src={user.data.avatar_url}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </NavLink>
          <span>{user.data.loginname}</span>
        </div>
        <ul>
          {user ? (
            user.data.recent_topics.map(topic => (
              <li key={topic.id}>
                <NavLink className='user-topic' to={`/topic/${topic.id}`}>{topic.title}</NavLink>
                <Button
                  type="primary"
                  onClick={() => {
                    this.handleEdit(topic.id);
                  }}
                >
                  编辑
                </Button>
              </li>
            ))
          ) : (
            <span>无</span>
          )}{" "}
        </ul>
      </div>
    ) : (
      ""
    );
    return (
      <div
        className="show"
        style={{ display: sessionStorage.token ? "flex" : "none" }}
      >
        <div className="left">
          <div className="box1">
            <NavLink to={`/`} className="toHomes">
              主页
            </NavLink>{" "}
            <span className="reply-title">/ 编辑话题</span>
          </div>
          <div className="box2">
            <span>选择板块：</span>
            <select value={selectValue} onChange={this.handleSelect}>
            <option value="volvo">请选择</option>
              <option value="dev">测试客户端</option>
              <option value="share">分享</option>
              <option value="ask">问答</option>
              <option value="job">招聘</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            placeholder="标题字数 10 字以上"
            value={areaValue}
            onChange={this.handleText}
          />
          <div ref="textarea" style={{ borderLeft: 0, borderRight: 0 }} />
          <Button
            type="primary"
            style={{
              color: "#fff",
              marginLeft: "15px",
              alignSelf: "flex-start",
              margin: "10px 5px"
            }}
            onClick={() => {
              this.handleSubmits(inputValue);
            }}
          >
            修改
          </Button>
        </div>
        <div className="right">{showTopics}</div>
      </div>
    );
  }
}

export default EditTopic;
