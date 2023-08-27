import { createData, deleteData, getData } from "./Services/NewslatterService"
import { ADD_NEWSLATTER, ADD_NEWSLATTER_RED, DELETE_NEWSLATTER, DELETE_NEWSLATTER_RED, GET_NEWSLATTER, GET_NEWSLATTER_RED } from "../Constant"
import { put,takeEvery } from "redux-saga/effects"
function* createSaga(action) {
    var response = yield createData(action.payload)
    yield put({ type: ADD_NEWSLATTER_RED, payload: response })
}
function* getSaga() {
    var response = yield getData()
    yield put({ type: GET_NEWSLATTER_RED, payload: response })
}
function* deleteSaga(action) {
    yield deleteData(action.payload)
    yield put({ type: DELETE_NEWSLATTER_RED, payload: action.payload })
}

export default function* newslatterSaga(){
    yield takeEvery(ADD_NEWSLATTER,createSaga)    
    yield takeEvery(GET_NEWSLATTER,getSaga)    
    yield takeEvery(DELETE_NEWSLATTER,deleteSaga)    
}  