import React, { Component } from 'react';
import styled from 'styled-components'
class Nav extends Component {
    handleChange=(tab) => {
        if(this.props.tab!==tab){
        this.props.changeTab(tab)
        this.props.getTopics(tab)
    }
    }
    render() {
        const {tab}=this.props
        return (
            <Wrap>
              <ul style={{listStyle:'none'}}>
                  <li onClick={()=>this.handleChange('all')} style={{backgroundColor:tab==='all'?'#80bd01':'#f6f6f6',color:tab==='all'?'#fff':'#80bd01'}}>全部</li >
                  <li onClick={()=>this.handleChange('good')} style={{backgroundColor:tab==='good'?'#80bd01':'#f6f6f6',color:tab==='good'?'#fff':'#80bd01'}}>精华</li >
                  <li onClick={()=>this.handleChange('share')} style={{backgroundColor:tab==='share'?'#80bd01':'#f6f6f6',color:tab==='share'?'#fff':'#80bd01'}}>分享</li >
                  <li onClick={()=>this.handleChange('ask')} style={{backgroundColor:tab==='ask'?'#80bd01':'#f6f6f6',color:tab==='ask'?'#fff':'#80bd01'}}>问答</li >
                  <li onClick={()=>this.handleChange('job')} style={{backgroundColor:tab==='job'?'#80bd01':'#f6f6f6',color:tab==='job'?'#fff':'#80bd01'}}>招聘</li >
              </ul>  
            </Wrap>
        );
    }
}

export default Nav;
const Wrap=styled.nav`
height:40px;
width:1000px;
margin-top:13px;
background-color:#f6f6f6;
border-radius: 3px 3px 0 0;

ul{
    width:300px;
    height:40px;
    display:flex;
    padding:0 0 0 22px;
    margin:0;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
li{
    width:36px;
    height:22px;
    text-align:center;
    border-radius: 3px;

}
}
`