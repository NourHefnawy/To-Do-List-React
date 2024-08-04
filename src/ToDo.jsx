import React, { useState } from "react";

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");
    
    function addTask() {
        if (newTask.trim() !== "") {
            if (editIndex !== null) {
               
                const updatedTasks = tasks.map((task, index) =>
                    index === editIndex ? newTask : task
                );
                setTasks(updatedTasks);
                setEditIndex(null);
                setEditValue("");
            } else {
               
                setTasks(t => [...t, newTask]);
            }
            setNewTask("");
        } else {
            alert("Please enter a Task.");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        if (editIndex === index) {
            
            setEditIndex(null);
            setNewTask("");
        }
    }

    function editTask(index) {
        setEditIndex(index);
        setEditValue(tasks[index]);
        setNewTask(tasks[index]); 
    }

    return (
        <div className="all">
            <h1>To-Do List</h1>

            <div className="container">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                    className="add"
                    onClick={addTask}
                >
                    {editIndex !== null ? "Update" : "Add"}
                </button>
                
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="edit"
                                onClick={() => editTask(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;
