import React, { Component } from "react";
import Quill from "quill";
// import "../../node_modules/quill/dist/quill.bubble.css";
import "../../node_modules/quill/dist/quill.snow.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { URI } from "../constants/url";
class CreateTopic extends Component {
  handleChange() {
    this.setState({ value: this.editor.root.innerText });
  }
  handleText=event => {
    this.setState({
      areaValue:event.target.value
    })
  }
  handleSelect=event => {
    this.setState({
      selectValue:event.target.value
    })
  }
  handleSubmits = () => {
    const {value,areaValue,selectValue}=this.state
    const content=`${value}` 
    const token=sessionStorage.token
    const uri =`${URI}/topics`
    console.log(token,areaValue,selectValue,content)
    axios.post(uri,{accesstoken:token,title:areaValue,tab:selectValue,content:content}).then(res=>{
      alert('创建成功')
    }).catch(err=>{})
  };
  constructor() {
    super();
    this.state = {
      value: "",
      areaValue:'',
      selectValue:''
    };
    this.editor = null;
  }
  componentDidMount = () => {
    const textbox = this.refs.textarea;
    const options = {
      debug: "log",
      modules: {
        toolbar: true
      },
      placeholder: "请输入文本...,修改文字简易样式，请选中要修改的文字即可弹出修改框",
      readOnly: false,
      theme: "snow"
    };
    const editor = (this.editor = new Quill(textbox, options));
    const { value } = this.state;
    if (value) editor.clipboard.dangerouslyPasteHTML(value);
    editor.on("text-change", this.handleChange.bind(this));
  };

  render() {
    const{areaValue,selectValue}=this.state
    return (
      <Wrap style={{ display: sessionStorage.token ? "flex" : "none" }}>
        {" "}
        <div className="box1">
          <NavLink to={`/`} className="toHomes">
            主页
          </NavLink>{" "}
          <span className="reply-title">/ 发布话题</span>
        </div>
        <div className="box2">
          <span>选择板块：</span>
          <select value={selectValue} onChange={this.handleSelect}>
            <option value="volvo">请选择</option>
            <option value="share">分享</option>
            <option value="ask">问答</option>
            <option value="job">招聘</option>
            <option value="dev">测试客户端</option>
          </select>
        </div>
        <textarea name="" id=""  placeholder="标题字数 10 字以上" value={areaValue} onChange={this.handleText}/>
        <div
          ref="textarea"
          style={{ borderBottom: 0, borderLeft: 0, borderRight: 0 }}
        />
        <Button
          type="primary"
          style={{ color: "#fff", marginLeft: "15px",alignSelf: "flex-start", margin: "10px 5px"}}
          onClick={this.handleSubmits}
        >
          提交
        </Button>
      </Wrap>
    );
  }
}

export default CreateTopic;

const Wrap = styled.div`
  width: 900px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 15px;
  border-radius: 3px;
  display:flex;
  flex-direction: column;
  .box1 {
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 40px;
    .toHomes {
      color: #80bd01;
      font-size: 14px;
    }
    .toHomes:hover {
      color: #005580;
      text-decoration: underline;
    }
    .reply-title {
      display: block;
      width: 90px;
      color: #999;
      font-size: 14px;
      line-height: 30px;
      padding-left: 10px;
    }
  }
  .box2 {
    padding-left: 10px;
    height: 60px;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;

    select {
      width: 220px;
      height: 30px;
      line-height: 30px;
      padding: 4px 6px;
      color: #555;
      font-size: 14px;
      border-radius: 4px;
      font-weight: 400;
      background-color: #fff;
      font: 400 13.3333px Arial;
      border: 1px solid #ccc;
    }
    select:focus {
      outline: #333 dotted thin;
      outline: -webkit-focus-ring-color auto 5px;
      outline-offset: -2px;
    }
  }
  textarea {
    width: 860px;
    height:30px;
    margin:0 auto;
    border: 1px solid #ccc;
    resize: none;
    margin-bottom: 1em;
    overflow:hidden;
    font-size: 14px;
    padding: 4px 6px;
    color: #555;
    border-radius: 4px;

}
textarea:focus{
  box-shadow: 0 0 2px rgba(60,60,60,.5);
}
  }
  .ql-editor {
    height: 480px;
  }
  .ql-toolbar.ql-snow {
    border-left: 0;
    border-right: 0;
  }
`;
