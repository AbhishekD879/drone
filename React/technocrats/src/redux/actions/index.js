export const ACTIONS={
    ADD_PRODUCTS_WITH_SALE:"ADD_PRODUCTS_WITH_SALE",
    GET_TOP_5:"GET_TOP_5",
    GET_CLIENTS:"GET_CLIENTS",
    GET_REVENUE:"GET_REVENUE",
    DELETE_PRODUCT:"DELETE_PRODUCT"
}



export const addProductWithSales=(payload)=>{
    
    return {
        type:ACTIONS.ADD_PRODUCTS_WITH_SALE,
        payload:payload
    }
}

export const getTop5Products=()=>{
    
    return {
        type:ACTIONS.GET_TOP_5,
    }
}

export const getClients=(payload)=>{
    
    return {
        type:ACTIONS.GET_CLIENTS,
        payload:payload
    }
}

export const getRevenue=(payload)=>{
    
    return {
        type:ACTIONS.GET_REVENUE,
        payload:payload
    }

}

export const deleteProduct=(payload)=>{
    return{
      
            type:ACTIONS.DELETE_PRODUCT,
            payload:payload
        
    }
}