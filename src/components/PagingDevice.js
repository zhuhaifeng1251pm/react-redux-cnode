import React, { Component } from 'react';
import { Pagination} from 'antd';

class PagingDevice extends Component {
   
    handleChange=(page) => {
        const {newtab}=this.props
        this.props.getTopics(newtab,page)
        console.log(page)
        this.props.changeTab(newtab,page)
    }
    render() {
        console.log(this.props.page)
        const {page}=this.props
        return (
            <div>
                <Pagination defaultCurrent={1} total={500}   onChange={this.handleChange}
                current={page}
                />
            </div>
        );
    }
}

export default PagingDevice;