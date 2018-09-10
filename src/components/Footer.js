import React, { Component } from 'react';
import styled from 'styled-components'
class Footer extends Component {
    render() {
        return (
            <Wrap>
                <ul>
                    <li><a href="https://cnodejs.org/rss">RSS</a><a href="https://github.com/cnodejs/nodeclub/">源码地址</a></li>
                    <li>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</li>
                    <li>服务器赞助商为<a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo"><img src="https://dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="" style={{width:"92px",height:'18.36px'}} />，存储赞助商为</a>
                    <a href="http://www.qiniu.com/?ref=cnode"><img src="https://dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="" style={{width:'115px',height:'43.7px'}} />，由</a>
                    <a href="https://www.aliyun.com/product/nodejs?ref=cnode"><img src="https://dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" alt=""  style={{width:'166px',height:'54px'}} /></a>提供应用性能服务。</li>
                    <li>新手搭建 Node.js 服务器，推荐使用无需备案的<a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></li>
                </ul>
            </Wrap>
        );
    }
}

export default Footer;
const Wrap=styled.div`
width:100%;
background-color:#fff;
padding:30px 0;
margin-top:17px;
ul{
    width:1200px;
    margin:0 auto;
    padding:0;
    li{
        display:flex;
        font-size:14px;
        color: #ababab;
        line-height: 25px;

    }
    li:first-child{
        a{
            color: #666;
            font-size: 13px;
            line-height: 20px;
            margin-right:10px;
        }
        a:hover{
            color: #385f8a;
        }
    }
    li:nth-child(3){
        line-height:54px;
    }
}
`