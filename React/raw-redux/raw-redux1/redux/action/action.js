export default ACTION={
    ADD_BUG:"ADD_BUG",
    REMOVE_BUG:"REMOVE_BUG",
    RESOLVE_BUG:"RESOLVE_BUG"
}



const addBug=payload=>{
    return{
        type:Action.ADD_BUG,
        payload
    }
}

const removeBug=payload=>{
    return{
        type:Action.REMOVE_BUG,
        payload
    }
}

const resolveBug=payload=>{
    return{
        type:Action.RESOLVE_BUG,
        payload
    }
}

export const triggerAction={
    addBug,
    removeBug,
    resolveBug
}