import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
class Author extends Component {
    handleAuthor=(name) => {
        this.props.showUser(name)
    }
    render() {
        const {article}=this.props
        console.log(article)
        const data=article.data.author
        return (
            <Wrap>
                <b>作者</b>
            <div>
              <Link to={`/user/${data.loginname}`}>  <img style={{width:'48px',height:'48px'}}src={data.avatar_url} alt="" onClick={()=>{this.handleAuthor(data.loginname)}}/></Link> <span>{data.loginname}</span>
                    
                </div>
            </Wrap>
        );
    }
}

export default Author;
const Wrap=styled.div`
width:290px;
height:170px;
background-color:#fff;
border-radius:2px;
margin-left:15px;
display:flex;
flex-direction: column;


b{
    width:290px;
    line-height:20px;
    padding: 10px;
    background-color: #f6f6f6;
    color: #51585c;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
}
div{
    padding:10px;
    span{
        font-size:16px;
        font-weight:bold;
        margin-left:15px;
    }
}
`