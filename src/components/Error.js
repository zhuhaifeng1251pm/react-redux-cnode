import React, { Component } from 'react';
import styled from "styled-components";
import { Button } from 'antd';
import { Link } from "react-router-dom";
class Error extends Component {
    render() {
        return (
            <Wrap>
           
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: "-200px",
              marginTop: "-150px"
            }}
            src="http://img.hb.aicdn.com/7a1f698825d1f1097997115e0ac8bad06a1c66062d9e6-i9kzjf_fw658"
            alt=""
          />
            <Link to={`/`}>
        <Button type="primary"  style={{
              position: "absolute",
              width:"100px",
              top: "83%",
              left: "61%",
              zIndex:99,
              marginLeft: "-200px",
              marginTop: "-150px"
            }}>To Home</Button>
        </Link>
            </Wrap>
        );
    }
}

export default Error;
const Wrap=styled.div`
    width:100%;
    height:100%;
    background-color:#000;
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img{
    text-align: center;
        
    }
    }
`