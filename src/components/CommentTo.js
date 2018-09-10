import React, { Component } from "react";
import Quill from "quill";
import '../../node_modules/quill/dist/quill.snow.css'
import { Button } from 'antd';
import styled from 'styled-components'
import moment from 'moment';
 class CommentTo extends Component {
  handleChange() {
    this.setState({ value:this.editor.root.innerText });
  }
  handleSubmit=() => {
    const {addComment,article}=this.props
    const {value}=this.state
    const {id}=article.data
    const token=sessionStorage.token
    const time =moment().format()
    // console.log(moment().format())
    addComment(value,id,token,article,time)
  }
  constructor() {
    super();
    this.state = {
      value: ''
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
   

    return <Wrap style={{display:sessionStorage.token?"block":'none'}}> <span className="reply-title">添加回复</span>
        <div ref="textarea" style={{borderBottom:0,borderLeft:0,borderRight:0}} />
            <Button type="primary" style={{color:'#fff',marginLeft:'15px'}} onClick={this.handleSubmit}>回复</Button>
    </Wrap>
  }
}

export default CommentTo;

const Wrap=styled.div`
.reply-title{
    display:block;
    width:90px;
    color: #444;
    font-size: 14px;
    line-height: 30px;
    padding-left:20px;
}
.ql-editor{
    height:120px;
}

`