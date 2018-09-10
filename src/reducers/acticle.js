import{SHOW_ARTICLE,CHANGE_COLLECT,CHANGE_DECOLLECT,CHANGE_GOODNUM,ADD_COMMENT}from '../constants/actionTypes'

const article= (state=null,action)=>{
    console.log(action)
    switch(action.type){
        case SHOW_ARTICLE: return state=action.topic
       case CHANGE_GOODNUM : 
       return {...action.article,data: {...action.article.data,replies:action.article.data.replies.map(replie=>replie.id===action.id?Object.assign({...replie},{is_active:action.data.action}):replie)}}
    case CHANGE_COLLECT:   
     return {...action.article,data: {...action.article.data,is_collect:true}}
     case CHANGE_DECOLLECT: return {...action.article,data: {...action.article.data,is_collect:false}}
     case ADD_COMMENT: return {...action.article,data:{...action.article.data,replies: [...action.article.data.replies,action.obj]}}
        default:return state;
    }

}
export default article