import { createData, deleteData, getData, updateData } from "./Services/ProductService"
import { ADD_PRODUCT, ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED } from "../Constant"
import { put,takeEvery } from "redux-saga/effects"
function* createSaga(action) {
    var response = yield createData(action.payload)
    yield put({ type: ADD_PRODUCT_RED, payload: response })
}
function* getSaga() {
    var response = yield getData()
    yield put({ type: GET_PRODUCT_RED, payload: response })
}
function* updateSaga(action) {
    var response = yield updateData(action.payload)
    yield put({ type: UPDATE_PRODUCT_RED, payload: response })
}
function* deleteSaga(action) {
    yield deleteData(action.payload)
    yield put({ type: DELETE_PRODUCT_RED, payload: action.payload })
}

export default function* productSaga(){
    yield takeEvery(ADD_PRODUCT,createSaga)    
    yield takeEvery(GET_PRODUCT,getSaga)    
    yield takeEvery(UPDATE_PRODUCT,updateSaga)    
    yield takeEvery(DELETE_PRODUCT,deleteSaga)    
}  