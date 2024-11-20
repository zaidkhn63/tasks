import { Dispatch } from "redux";

import { Task } from "../types";
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_TASKS = 'SET_TASKS';

export const addTask = (title: string) => {
    console.log('taskcalled');
    return{
    type:'ADD_TASK',
    payload: title
    }
};

export const deleteTask = (taskId: number) => ({
    type:'DELETE_TASK',
    payload: taskId
});

export const toggleTask = (taskId: number) => ({
    type:'TOGGLE_TASK',
    payload: taskId
});

export const fetchTasks = () => {

    console.log("fetch called")

    return async (dispatch:Dispatch) => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data :Task[] = await response.json();
    dispatch({
        type:SET_TASKS,
        payload:data.slice(0,10),
    });
}catch(error) {
    console.log('error finding data')
}
    }
    
}