import { ADD_NEWSLATTER, DELETE_NEWSLATTER, GET_NEWSLATTER } from "../Constant"
export function createNewslatter(data) {
    return {
        type: ADD_NEWSLATTER,
        payload: data
    }
}
export function getNewslatter() {
    return {
        type: GET_NEWSLATTER
    }
}
export function deleteNewslatter(data) {
    return {
        type: DELETE_NEWSLATTER,
        payload:data
    }
}