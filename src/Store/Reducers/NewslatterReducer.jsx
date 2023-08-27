import { ADD_NEWSLATTER_RED, DELETE_NEWSLATTER_RED, GET_NEWSLATTER_RED } from "../Constant"
export default function NewslatterReducer(state=[], action) {
    let newState, index
    switch (action.type) {
        case ADD_NEWSLATTER_RED:
            newState = state
            newState.push(action.payload)
            return newState
        case GET_NEWSLATTER_RED:
            return action.payload
        case DELETE_NEWSLATTER_RED:
            newState = state
            index = newState.findIndex((x) => x.id === action.payload.id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}