import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask,toggleTask,deleteTask,fetchTasks } from "../actions/taskActions";
import {AppDispatch, RootState } from '../store/store';
import { Task } from "../reducers/taskReducer";

const TaskList: React.FC = () =>{

    const dispatch = useDispatch<AppDispatch>();
    const tasks  = useSelector((state:RootState)=> state.tasks.tasks)
    const [newTask,setNewTask] = useState('');
console.log('taskssss',tasks)
    
    useEffect(()=> {
        dispatch(fetchTasks());
        console.log('Tasks have been updated',tasks)
    },[dispatch])

    const handleAddTask = () =>{
        console.log('newTrim',newTask.trim())
        if(newTask.trim()) {
            dispatch(addTask(newTask));
            console.log('Tasks',tasks)
            setNewTask('');
        }
    };

    return(
        <div className="task-manager" >
            <h1>Task Manager</h1>
            <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)}
            placeholder="Add a New Task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) =>(
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input type="checkbox" checked={task.completed} onChange={()=>dispatch(toggleTask(task.id))}
                        />
                        {task.title}
                        <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;