import React, { Component } from "react";
import { connect } from "react-redux";
import { showArticle } from "../action";
import Writings from "./Writings";
import Comments from "./Comments";
import Author from './Author';
class Article extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showArticle(id,this.props.history);
    console.log(this.props)
  }

  render() {
    const { article,changeCollect,changeGoodNum,changeDecollect,addComment,showUser} = this.props;
    console.log(article)
    console.log(1)
    const articleItem =
      article? (
        <div style={{display:'flex',width:'1200px',margin:'0 auto',marginTop:'17px'}}> <div className='article'>
        <Writings article={article}  changeCollect={changeCollect } changeDecollect={changeDecollect} />
        <Comments article={article} changeGoodNum={changeGoodNum} addComment={addComment} showUser={showUser}/></div><Author article={article} showUser={showUser}/></div>
      ) : (
        <div
          className="showPic"
          style={{
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            bottom: 0,
            width: "100%",
            backgroundColor: "#062734"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginLeft: "-200px",
              marginTop: "-150px"
            }}
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535611616126&di=7520afeb16b5cc1e76e2c95658c544cd&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F003yZkUHgy6QnuElWoUc8%26690"
            alt=""
          />
        </div>
      );
    return <div>{articleItem}</div>;
  }
}

export default connect(
  null,
  { showArticle }
)(Article);
