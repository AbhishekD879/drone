import ACTION from "../action/action";
const initialState=[];
const lastId=0;
const bugReducer=(state=initialState,{type,payload})=>{

    if(type===ACTION.ADD_BUG){
        state.push({
            id:++lastId,
            description:payload.description,
            resolved:false
        });
    }

    if(type===ACTION.REMOVE_BUG){
        return state.filter(bug=>bug.id!==payload.id);
    }

    if(type===ACTION.RESOLVE_BUG){
        return state[state.findIndex((bug)=>bug.id===payload.id)]={
            ...state[state.findIndex((bug)=>bug.id===payload.id)],
            resolved:true
        }
    }

    return state;
}

export default bugReducer;