
import { ACTIONS } from "../actions";

const initialState=[];
const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ACTIONS.USERDATA:
            return {
                ...state,
                ...payload
            }
        default:
            return state    
    }
}

export default userReducer