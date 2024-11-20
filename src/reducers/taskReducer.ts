import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, SET_TASKS } from "../actions/taskActions";
import { Task } from "../types";

interface State {
    tasks: Task[];
}

const initialState: State = {
    tasks: [],
};

const taskReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { id: Date.now(), title: action.payload, completed: false },
                ],
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                ),
            };
        default:
            return state;
    }
};

export default taskReducer;

