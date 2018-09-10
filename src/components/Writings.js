import React, { Component } from 'react';
import styled from 'styled-components'
import { showTab } from '../selector/index';
import { Button } from 'antd';
class Writings extends Component {
  
    handCollect=(id) => {
        const{changeCollect,article}=this.props
        changeCollect(id,article)
        
    }
    handDecollect=(id) => {
        const {changeDecollect,article}=this.props
        changeDecollect(id,article)
        console.log(1)
        }
    
    render() {
        console.log(this.props)
        const data=this.props.article.data
        const html={__html:data.content}
        const token =sessionStorage.token
        const showWritings=data?<Wrap className="showWritings"> <div className="title"><h3 >{data.title}</h3><div style={{display:'flex',  alignItems: "center",justifyContent: "space-between"}}><p>{`•发布于 3 个月前•作者 ${data.author.loginname} •${data.visit_count
        }次浏览•最后一次编辑是 2 个月前•来自 ${showTab(data.tab)}`}</p>{token?data.is_collect?<Button  type="primary" onClick={()=>{this.handDecollect(data.id)} }
        style={{backgroundColor:"#ccc"}}
        >
        {'取消收藏'
        
    }</Button>:<Button  type="primary" onClick={()=>{this.handCollect(data.id)} }
    style={{backgroundColor:"#80bd01"}}
    >
    {
    "收藏"
}</Button>:''}</div></div><div dangerouslySetInnerHTML={html} className="show-article"></div></Wrap>:<span>加载中。。。。。</span>   
        return (
            <div>
                {showWritings}
            </div>
        );
    }
}

export default Writings;
const Wrap=styled.div`
width:900px;
border-radius:2px;
margin:0 auto;
background-color:#fff;
.title{
    padding:20px;
    h3{
        font-size: 22px;
        font-weight: 700;
        margin: 8px 0;
        display: inline-block;
        vertical-align: bottom;
        width: 75%;
        line-height: 130%;
    }
border-bottom:1px solid #ccc;
p{
    margin-bottom:0;
}

}
.show-article{

padding:20px;}
`
