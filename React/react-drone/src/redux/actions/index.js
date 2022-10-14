export const ACTIONS={
    USERDATA:"USERDATA"
}



export const userDataAction=(payload)=>{
    console.log(payload)
    return {
        type:ACTIONS.USERDATA,
        payload:payload.data
    }
}