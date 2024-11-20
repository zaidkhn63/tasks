import { configureStore } from "@reduxjs/toolkit";
import { ThunkAction,ThunkDispatch } from "redux-thunk";
import taskReducer from "../reducers/taskReducer";
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer:{
        tasks: taskReducer
    },
    middleware: (getdefaultMiddleware)=> getdefaultMiddleware(),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;