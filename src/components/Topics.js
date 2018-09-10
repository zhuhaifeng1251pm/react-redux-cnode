import React, { Component } from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {showTab} from '../selector/index'
import Time from './Time';
import PagingDevice from './PagingDevice';
class Topics extends Component {
    handleShow=(name) => {
        this.props.showUser(name)
        // console.log(1)
    }
    render() {
        const {topics,newtab,getTopics,page,changeTab}=this.props
        console.log(topics)

        const topicsLists=topics.length===0? <span>加载中。。。。</span>:<ul className='show-ul'>{topics.map(({id,title,author,reply_count,visit_count,good,tab,last_reply_at



        })=><li className="show-li" key={id
        } style={{alignItems: reply_count>99?'flex-start':'center'}}>
        <NavLink className="blue" to={`/user/${author.loginname}`}><img src={author.avatar_url} alt="" onClick={()=>{this.handleShow(author.loginname)}} /></NavLink>
        <div style={{height:reply_count>99?'60px':'30px',flexDirection:reply_count>99?'column':'row',    justifyContent:reply_count>99?'space-between':'center'}}>
        <span style={{color:'#9e78c0'}}>{reply_count}<b>/ </b></span>
        <span style={{color:'#b4b4b4'}}> {visit_count}</span></div>
        <span  className="title-type" style={{color:good?'#fff':'#999',backgroundColor:newtab==="all"?good?"#80bd01":"#e5e5e5":newtab==="good"?'#80bd01':'#fff'}} >{newtab==="all"?good?"精华":showTab(tab):newtab==="good"?'精华':''}</span>
        <NavLink to={`/topic/${id}`}  activeStyle={{
    fontWeight: 'bold',
    color: '#ccc'
   }} >{title}</NavLink>
        <div className="last-reply"><span ><Time time={last_reply_at}/></span></div> </li>)}</ul>
        return (
            <Wrap>
                {topicsLists}
                <PagingDevice getTopics={getTopics}tab={newtab} page={page} changeTab={changeTab} newtab={newtab}/> 
            </Wrap>
        );
    }
}

export default Topics;
const Wrap=styled.div`
width:100%;
display:felx;
flex-direction: column;
.show-ul{
    padding:0;
    margin:0;
    margin-bottom:15px;
li:first-child{
    border-top:none;
   
}
.show-li{
    width:1000px;
    border-top: 1px solid #f0f0f0;
    display:flex;
    align-items: center;
    padding:10px 15px;
    background-color:#fff;
    a{
        text-decoration: none;
        color:#000;
        width:400px;
        margin-left:30px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    a:hover{
        text-decoration: underline;
    }
    .last-reply{
        margin-left: 200px;
        display:flex;
        
        width:300px;
        align-items: center;
        justify-content: space-between;
        position:relative;
        span{
            position:absolute;
            right:0;
            top:30%;
            margin-top:-7px;
        }

        
        
    }
.blue{
    width:30px;
    height:30px;
    margin-left: 0;

img{
    width:100%;
}}
.title-type{
    width:40px;
    margin-left:10px;
    border-radius: 3px;
    padding: 2px 4px;
    font-size: 12px;
    line-height:18px;
    text-align:center;
}
div{
    width:48px;
    display:flex;
    align-items: center;
    margin-left: 7px;
    font-size:14px;
    margin-right:0;
    span{
        b{
            font-size:10px;
            color: #333;

        }
    }
    span:last-child{
        font-size:10px;
    }

}
}
li:hover{
    background: #f5f5f5;
}
}
`