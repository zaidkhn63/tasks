import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Task } from "../types";

export interface Task {
    id:number;
    title:string;
    completed:boolean;
}

interface State {
    tasks:Task[];
}

const initialState: State = {
    tasks:[]

}

const taskReducer = (state= initialState, action:any) =>{
    switch (action.type){
        case 'ADD_TASK':
            return{...state,tasks:[...state.tasks,{id:Date.now(), title: action.payload, commpleted:false}]}

        case 'DELETE_TASK':
            return{...state,tasks:state.tasks.filter((task) => task.id !== action.payload)}

        case 'TOGGLE_TASK' :
            return {
                ...state,
                tasks:state.tasks.map((task) => task.id === action.payload ? {...task,completed:!task.completed} : task)
            };

            default:
                return state;
        
    }
}

export default taskReducer;