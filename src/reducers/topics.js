import{GET_TOPICS}from '../constants/actionTypes'
const initialState=[]

const topics= (state=initialState,action)=>{
    switch(action.type){
        case GET_TOPICS: return state=action.topics;
        default:return state;
    }

}
export default topics