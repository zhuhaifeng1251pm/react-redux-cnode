import{SHOW_MESSAGE,UPDATE_MESSAGE}from '../constants/actionTypes'

const message= (state=null,action)=>{
    switch(action.type){
        case SHOW_MESSAGE:
        return state=action.message
        case UPDATE_MESSAGE:
        return state={...action.message,data:{...action.message.data,hasnot_read_messages:action.message.data.hasnot_read_messages.filter(t=>t.id!==action.id)}}
        default:return state;
    }
    
}
export default message