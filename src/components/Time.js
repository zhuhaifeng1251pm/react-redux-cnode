import React, { Component } from 'react';
import Moment from 'react-moment';
import '../../node_modules/moment/locale/zh-cn'
class Time extends Component {
    render() {
        const {time}=this.props
        return (
            
            <Moment fromNow>{time}</Moment>
            
        )
    }
}

export default Time;
 
