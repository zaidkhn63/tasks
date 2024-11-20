import { Dispatch } from "redux";
import { Task } from "../types";

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_TASKS = "SET_TASKS";

export const addTask = (title: string) => ({
    type: ADD_TASK,
    payload: title,
});

export const deleteTask = (taskId: number) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const toggleTask = (taskId: number) => ({
    type: TOGGLE_TASK,
    payload: taskId,
});

export const fetchTasks = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data: Task[] = await response.json();
            console.log("Fetched Tasks:", data);  // Debug log to check fetched data
            dispatch({
                type: SET_TASKS,
                payload: data.slice(0, 10),  // Only take the first 10 tasks
            });
        } catch (error) {
            console.error("Error fetching tasks:", error);  // Log any errors
        }
    };
};