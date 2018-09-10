import{SHOW_USER}from '../constants/actionTypes'

const showuser= (state=null,action)=>{
    switch(action.type){
        case SHOW_USER:
        return state=action.user
        default:return state;
    }

}
export default showuser