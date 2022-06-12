import { TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer, { RootState } from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        sagaMiddleware
    ],
});

rootSaga(sagaMiddleware.run);

export default store;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;