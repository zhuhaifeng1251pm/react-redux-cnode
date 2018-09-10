import React, { Component } from 'react';
import Nav from './Nav';
import Topics from './Topics';
import styled from 'styled-components'

class Home extends Component {
    render() {
        const {topics,changeTab,getTopics,tab,showUser,page}=this.props
        // console.log(this.props)
        return (
            <Wrap>
                <div>
                <Nav changeTab={changeTab} getTopics={getTopics} tab={tab}/>
                <Topics topics={topics} newtab={tab} showUser={showUser} getTopics={getTopics} page={page} changeTab={changeTab}/>
                </div>
            </Wrap>
        );
    }
}

export default Home;
const Wrap =styled.div`
@import '../asset/global.scss'
width:100%;
background-color:$bg;
div{
    width:1200px;
        margin:0 auto;
        display:flex;
        flex-direction:column;

}


`