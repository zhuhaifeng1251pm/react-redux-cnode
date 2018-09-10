import{CHANGE_LOGIN}from '../constants/actionTypes'

const login= (state=false,action)=>{
    switch(action.type){
        case CHANGE_LOGIN: return state=!action.login;
        default:return state;
    }

}
export default login