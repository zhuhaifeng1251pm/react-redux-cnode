import{CHANGE_TAB}from '../constants/actionTypes'

const topics= (state=1,action)=>{
    switch(action.type){
        case CHANGE_TAB:return state=action.page
        default:return state;
    }

}
export default topics