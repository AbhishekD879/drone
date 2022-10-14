
import { ACTIONS } from "../actions";

const initialState={
    products:[],
    saleStats:[],
    revenue:{},
    clientList:[],
    top5Products:[]
};
const DataReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ACTIONS.ADD_PRODUCTS_WITH_SALE:
            
            return {
                ...state,
                products:payload.map((data)=>{return{...data,sales:Math.round(Math.random()*data.rating.count)}}),
            }
            
        case ACTIONS.GET_TOP_5 :
            return{
                ...state,
                top5Products:state.products.sort((a,b)=>b.sales-a.sales).slice(0,5)
            }
         case ACTIONS.GET_CLIENTS:
            return {
                ...state,
                clientList:payload
            }
         case ACTIONS.GET_REVENUE:
            return {
                ...state,
                revenue:payload
            }
         case ACTIONS.DELETE_PRODUCT:
            return{
                ...state,
                products:state.products.filter((pro)=>pro.id!==payload)
            }           
        default:
            return state    
    }
}

export default DataReducer