import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, fetchTasks } from "../actions/taskActions";
import { AppDispatch, RootState } from "../store/store";
import TaskItem from "./TaskItem";
import FilterButtons from "./FilterButtons";

const TaskList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);  // Check this line
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        dispatch(fetchTasks());  // Fetch tasks when the component mounts
    }, [dispatch]);

    const handleAddTask = () => {
        if (newTask.trim()) {
            dispatch(addTask(newTask));
            setNewTask("");
        }
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;  // "all" case, show all tasks
    });

    return (
        <div className="task-manager">
            <h1>Task Manager</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a New Task"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <FilterButtons filter={filter} setFilter={setFilter} />

            <ul>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <TaskItem key={task.id} task={task} />
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </ul>
        </div>
    );
};

export default TaskList;
