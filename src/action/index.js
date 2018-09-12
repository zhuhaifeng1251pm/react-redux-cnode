import {
  GET_TOPICS,
  CHANGE_TAB,
  SHOW_ARTICLE,
  CHANGE_COLLECT,
  CHANGE_GOODNUM,
  CHANGE_LOGIN,CHANGE_DECOLLECT,
  ADD_COMMENT,SHOW_USER,SHOW_MESSAGE,UPDATE_MESSAGE
} from "../constants/actionTypes";
import axios from "axios";
import { URI } from "../constants/url";
export const getTopics = (tab,page=1) => dispatch => {
  const uri = tab ? `${URI}/topics/?tab=${tab}&page=${page}&limit=40` : `${URI}/topics?page=${page}&limit=40`;
  axios
    .get(uri)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_TOPICS,
        topics: res.data.data
      });
    })
    .catch(err => {});
};
export const changeTab = (tab,page=1) => ({
  type: CHANGE_TAB,
  tab,page
});
export const changeLogin = login => ({
    
    type: CHANGE_LOGIN,
    login
  });
// export const  changeCollect =  isCollect =>({
//     type:CHANGE_COLLECT,
//     isCollect
// })
export const changeCollect = (id,article)=> dispatch => {
  const uri = `${URI}/topic_collect/collect`;
  const token = sessionStorage.token;
  axios
    .post(uri, { accesstoken: token, topic_id: id })
    .then(res => {
    //   console.log(res.data);
      if(res.data){
      dispatch({
        type: CHANGE_COLLECT,
        article
      });}
    })
    .catch(err => {});
};
export const changeDecollect = (id,article)=> dispatch => {
    const uri = `${URI}/topic_collect/de_collect`;
    const token = sessionStorage.token;
    console.log(1)
    axios
      .post(uri, { accesstoken: token, topic_id: id })
      .then(res => {
        console.log(res.data);
        if(res.data){
        dispatch({
          type: CHANGE_DECOLLECT,
          article
        });}
      })
      .catch(err => {});
  };

// export const  changeGoodNum =  isCollect =>({
//     type:CHANGE_GOODNUM,
//     isCollect
// })
export const changeGoodNum = (token, id,article) => dispatch => {
  const uri = `${URI}/reply/${id}/ups`;
  axios
    .post(uri, { accesstoken: token })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: CHANGE_GOODNUM,
        data:res.data,
        id,article
      });
    })
    .catch(err => {});
};

export const showArticle = (id,history) => dispatch => {
  const token=sessionStorage.token
  if(token){
    const uri = `${URI}/topic/${id}?accesstoken=${token}`;
    axios
    .get(uri)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: SHOW_ARTICLE,
        topic: res.data
      });
    })
    .catch(err => {history.push('/404')});
  }
  else{
    const uri = `${URI}/topic/${id}`;

  axios
    .get(uri)
    .then(res => {
      
      dispatch({
        type: SHOW_ARTICLE,
        topic: res.data
      });
    })
    .catch(err => {history.push('/404')});}
};
export const addComment = (text,id,token,article,time) => dispatch => {
  const uri = `${URI}/topic/${id}/replies`
  const author={loginname:sessionStorage.name,avatar_url:sessionStorage.img}
  // console.log(text,id,token)
  axios
    .post(uri,{accesstoken:token,content:text})
    .then(res => {
      const obj={id:res.data.reply_id,author,is_uped:false,create_at:time,content:`<p>${text}</p>`,ups:[]}
      dispatch({
        type: ADD_COMMENT,
        article,
        obj
      });
    })
    .catch(err => {});
};

export const showUser= (name,history) => dispatch => {
  const uri = `${URI}/user/${name}`
  axios
    .get(uri)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: SHOW_USER,
        user: res.data
      });
    })
    .catch(err => {history.push('/404')});
}

export const showMessage= () => dispatch => {
  const {token}=sessionStorage
  const uri = `${URI}/messages/?accesstoken=${token}`
  axios
    .get(uri)
    .then(res => {
      dispatch({
        type: SHOW_MESSAGE,
        message: res.data
      });
    })
    // .catch(err => {history.push('/404')}); 
}

export const updateMessage= (id,message) => dispatch => {
  const uri=`${URI}/message/mark_one/${id}`
  const {token}=sessionStorage
  console.log(id,message)
  axios.post(uri,{accesstoken:token}).then(res=>{
    dispatch({
      type: UPDATE_MESSAGE,
      id,
      message
    });
  }).catch(err=>{})




  // const {token}=sessionStorage
  // const uri = `${URI}/messages/?accesstoken=${token}`
  // axios
  //   .get(uri)
  //   .then(res => {
  //     dispatch({
  //       type: UPDATE_MESSAGE,
  //       message: res.data
  //     });
  //   })
    // .catch(err => {history.push('/404')}); 
}