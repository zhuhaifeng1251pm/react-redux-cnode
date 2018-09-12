import { combineReducers } from "redux";
import topics from './topics'
import tab from './tab'
import article from './acticle';
import login from './login';
import  user from './showuser';
import page from "./page";
import message from "./message";



const rootRudcer = combineReducers({
    topics,tab,article,login,user,page,message
})
export default rootRudcer