import ACTION from "../action/action";

const initialState={};



const bugGroupingReducer=(state=initialState,{type,payload})=>{
    console.log("inside groupingReducer",payload,type)
    if(type===ACTION.GROUP_BUGS){
        console.log("Inside if block")
        payload.bugs.forEach((bug)=>{
            // console.log(state)
            if(!state[bug.priority]){
                state[bug.priority]=[];
                state[bug.priority].push(bug)
            }else{
                state[bug.priority].push(bug)
            }
        })
        return state
    }
    return state
 
}

export default bugGroupingReducer;