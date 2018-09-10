import{CHANGE_TAB}from '../constants/actionTypes'

const topics= (state='all',action)=>{
    switch(action.type){
        case CHANGE_TAB:return state=action.tab
        default:return state;
    }

}
export default topics