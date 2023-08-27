import { ADD_CART_RED, DELETE_CART_RED, GET_CART_RED, UPDATE_CART_RED } from "../Constant"
export default function CartReducer(state=[], action) {
    let newState, index
    switch (action.type) {
        case ADD_CART_RED:
            newState = state
            newState.push(action.payload)
            return newState
        case GET_CART_RED:
            return action.payload
        case UPDATE_CART_RED:
            newState = state
            index = newState.findIndex((x) => x.id === action.payload.id)
            newState[index].qty= action.payload.qty
            newState[index].total= action.payload.total
          
            return newState
        case DELETE_CART_RED:
            newState = state
            index = newState.findIndex((x) => x.id === action.payload.id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}