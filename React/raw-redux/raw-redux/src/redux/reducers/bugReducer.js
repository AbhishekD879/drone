import ACTION from "../action/action";
const initialState=[];
let lastId=0;
const bugReducer=(state=initialState,{type,payload})=>{
    console.log("insideBugReducer",type)
    if(type===ACTION.ADD_BUG){
        return [
            ...state,
            {
                id:++lastId,
                description:payload.description,
                resolved:false,
                priority:payload.priority?payload.priority:1
            }
        ]
    }

    if(type===ACTION.REMOVE_BUG){
        return state.filter(bug=>bug.id!==payload.id);
    }

    if(type===ACTION.RESOLVE_BUG){
        return state.map(bug=>{
            if(bug.id===payload.id){
                return{
                    ...bug,
                    resolved:true
                }
            }else{
                return bug;
            }
        })
    }

    if(type===ACTION.SORT_PRIORITY){
        return state.sort((a,b)=>b.priority-a.priority)
    }

    return state;
}

export default bugReducer;