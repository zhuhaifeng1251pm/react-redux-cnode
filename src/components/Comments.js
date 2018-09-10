import React, { Component } from "react";
import styled from "styled-components";
import { newArrs } from "../selector/";
import Time from "./Time";
import "../../node_modules/moment/locale/zh-cn.js";
import picN from '../images/点赞N.png'
import picY from '../images/点赞Y.png'
import CommentTo from "./CommentTo";
import { Link } from "react-router-dom";


class Comments extends Component {
  ShowUser=(name) => {
  this.props.showUser(name)
  }

  handleGood=(id) => {
    if(sessionStorage.token){
      const {article}=this.props
      console.log(article)
      this.props.changeGoodNum(sessionStorage.token,id,article)
    }
    else{
      alert('请先登录，登录后即可点赞！')
    }
  }
  render() {
    const data = this.props.article;
    const visiters = data.data.replies;
    const newVisiters = newArrs(visiters);
        // console.log(newVisiters)
    const num = visiters.length;
    const {addComment,article}=this.props
    console.log(this.props)
    const commentTop = (
      <div>
        <div className="top">
          {num}
          回复
        </div>
      </div>
    );
    const commentLists = (
      <ul>
        {newVisiters.map(newVisiter => (
          <li key={newVisiter.id}>
            <div className="details">
            <Link to={`/user/${newVisiter.author.loginname}`}> 
              <img
                src={newVisiter.author.avatar_url}
                alt=""
                style={{ width: "30px", heigth: "30px" }}
                onClick={()=>{this.ShowUser(newVisiter.author.loginname)}}
              /></Link>
              <div className="details-box">
                <span style={{ marginLeft: "10px" }}>
                  {newVisiter.author.loginname}
                </span>
                <span style={{ marginLeft: "10px" }}>
                  {`${newVisiter.num}楼•`}
                  <Time time={newVisiter.create_at} />
                </span>
                <div className="isGood">
                  <b onClick={()=>{this.handleGood(newVisiter.id)}}>
                    <img
                      src={newVisiter.is_uped?newVisiter.is_active==='down'?picN:picY:newVisiter.is_active==='up'?picY: picN}
                      alt=""
                    />
                  </b>
                  <b>{ newVisiter.is_uped?newVisiter.is_active==='down'?newVisiter.ups.length-1:newVisiter.ups.length:newVisiter.is_active==='up'?newVisiter.ups.length+1: newVisiter.ups.length
                  }</b>
                  <b style={{display:sessionStorage.token?"flex":"none"}}>
                    <img
                      src="http://pcgnine5c.bkt.clouddn.com/%E5%9B%9E%E5%A4%8D.png"
                      alt=""
                    />
                  </b>
                </div>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: newVisiter.content }}
              className="show-comment"
            />
          </li>
        ))}
      </ul>
    );
    return (
      <Wrap>
        {commentTop}
        {commentLists}
        <CommentTo addComment={addComment} article={article}/>
      </Wrap>
    );
  }
}

export default Comments;
const Wrap = styled.div`
  width: 900px;
  border-radius: 2px;
  margin: 0 auto;
  background-color: #fff;
  .top {
    padding: 10px;
    font-weight: bold;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      width: 100%;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
      padding: 10px;
      position:relative;
      .details {
        display: flex;
        height: 30px;
        .details-box {
            
          span {
            color: #666;
            font-size: 12px;
            font-weight: 700;
          }
          span:nth-child(2) {
            font-size: 11px;
            color: #08c;
            text-decoration: none;
          }
          span:nth-child(2):hover {
            color: #005580;
            text-decoration: underline;
          }
          .isGood{
              position:absolute;
              top:10px;
              right:0;
              width:80px;
              height:23px;
            b{
                width:16px;
                margin-left:10px;
                font-size:14px;
                img{
                    width:16px;
                }
            }
           
            b:last-child{
                position:absolute;
                top:3px;
                right:10px;

            }
          }
        }
        img {
          width: 100%;
        }
      }
      .show-comment {
        margin-left: 80px;
        img {
          width: 100%;
        }
      }
    }
  }
`;
