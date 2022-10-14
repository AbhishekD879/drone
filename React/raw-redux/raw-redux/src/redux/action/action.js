
const ACTION={
    ADD_BUG:"ADD_BUG",
    REMOVE_BUG:"REMOVE_BUG",
    RESOLVE_BUG:"RESOLVE_BUG",
    SORT_PRIORITY:"SORT_PRIORITY",
    GROUP_BUGS:"GROUP_BUGS",
}



const addBug=payload=>{
    return{
        type:ACTION.ADD_BUG,
        payload
    }
}

const removeBug=payload=>{
    return{
        type:ACTION.REMOVE_BUG,
        payload
    }
}

const resolveBug=payload=>{
    return{
        type:ACTION.RESOLVE_BUG,
        payload
    }
}
const sortBugs=payload=>{
    return{
        type:ACTION.SORT_PRIORITY,
        payload
    }
}

const groupBug=payload=>{
    return{
        type:ACTION.GROUP_BUGS,
        payload
    }
}

export const triggerAction={
    addBug,
    removeBug,
    resolveBug,
    sortBugs
}

export const bugGrpAction={
    groupBug
}

export default ACTION;