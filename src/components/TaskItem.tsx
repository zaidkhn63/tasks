import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../actions/taskActions";
import { Task } from "../types";

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <li className={task.completed ? "completed" : ""}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggle}  // Dispatch toggleTask when the checkbox is clicked
            />
            {task.title}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TaskItem;
