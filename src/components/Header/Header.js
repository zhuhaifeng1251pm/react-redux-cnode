import React, { Component } from 'react';
import styled from 'styled-components'
import {Link,NavLink} from 'react-router-dom'
import axios from 'axios';
import {URI} from '../../constants/url'
import { Button,Avatar } from 'antd';
import './header.scss'
import { changeLogin } from '../../action';
import store from '../../store'
import { connect } from "react-redux";
import {showUser}from '../../action/index'

class Header extends Component {
    state={
        texts:'',
    }
    handleShowUser=(name) => {
        this.props.showUser(name)
        // console.log(1)
    }
    handleChange=event=>{
        this.setState({
            texts:event.target.value
        })
    }
    handleGoOut=() => {
        
        sessionStorage.clear()
        const {login}=this.props
        store.dispatch(changeLogin(login))
        this.setState({
            texts:''
        })
    }

    handleLogin=() => {
        const {texts}=this.state
        const {login}=this.props
        const uri =`${URI}/accesstoken`
        axios.post(uri,{accesstoken:texts}).then(res=>{
            sessionStorage.name=res.data.loginname
            sessionStorage.img=res.data.avatar_url
            sessionStorage.token=texts
            store.dispatch(changeLogin(login))
        }).catch(err=>{
            alert('error')
        })
    }
    render() {
        const {num}=this.props
        const {name,img,token}=sessionStorage
        const {texts}=this.state     
        const showLogin= token? <div className='login-box'><span id='username'>{name}</span><Link to={`/user/${name}`}><span onClick={()=>{this.handleShowUser(name)}}><Avatar style={{width:'30px',marginRight:'15px'}} src={img} /></span></Link><Link to={`/topics/create`}><Button type="primary" ghost >发布主题</Button></Link><Link to={`/topics/edit`}><Button type="primary" ghost style={{marginLeft:'10px'}}>编辑主题</Button></Link>
        <NavLink to={`/message`} className='message'>未读消息 <span className='message-num' style={{display:num?'block':'none'}} >{num?num:''}</span> </NavLink>
        <Link to={`/`}>  <Button type="primary" onClick={this.handleGoOut} style={{marginLeft:'10px'}}>登出</Button></Link>
        </div> : <div className='login-box'> <input type="text" value={texts} onChange={this.handleChange}/><Link to={`/`}>
        <Button type="primary" onClick={this.handleLogin}>登录</Button>
        </Link></div>
       
          return (
            <Wrap>
            <header>
               <Link to='/'> <h1><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/></h1></Link>
               {showLogin}
            </header>
            </Wrap>
        );
    }
}

export default connect(null,{showUser})(Header);
const Wrap=styled.div`
    width:100%;
    display:flex;
    align-items: center;
    background: #444;
    height:50px;
    header{
        width:1200px;
        margin:0 auto;
        display:flex;
        align-items: center;
        justify-content: space-between;
       .message{
        text-decoration: none;
        display:flex;
        align-items: center;
        margin:0 5px 0 10px;
        .message-num{
            color:#fff;
            border-radius:50%;
            height:20px;
            width:20px;
            background-color:rgb(128, 189, 1);
            text-align: center;
        }
       }
      input{
          margin-right:90px;

      }  

    h1{
        width:120px;
        margin:0;
        img{
            width:120px;
            width:100%;
        }
    }
}
`