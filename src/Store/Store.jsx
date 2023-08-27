import { configureStore } from "@reduxjs/toolkit"
import CreateSagaMiddleware from "@redux-saga/core"

import RootReducer from "./Reducers/RootReducer"
import RootSaga from "./Sagas/RootSaga"

const sagaMiddleware = CreateSagaMiddleware()
const Store = configureStore({
    reducer:RootReducer,
    middleware:()=>[sagaMiddleware]
})

export default Store

sagaMiddleware.run(RootSaga)