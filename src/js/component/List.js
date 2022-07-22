import React, { useState } from "react";
import {Task} from "./Task"
import {TaskCounter} from "./TaskCounter"



export const List = () => {
    const [tasklist, setTasklist] = useState(["work out"]);
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const addNewTask = (e) => {
        if (e.key ==="Enter") {
            const newTaskList = [...tasklist]
            newTaskList.push(inputValue)
            setTasklist(newTaskList)
            setInputValue("");
        }
    }

    const deleteTask = (Text) => {
        const newTaskList = [...tasklist]
        const taskIndex = newTaskList.findIndex((task) => task === Text)
        newTaskList.splice(taskIndex, 1);
        setTasklist(newTaskList);
    }

    return(
            <div className="container d-flex justify-content-center p-2">
                <ul className="List-group w-50">
                    <li className="list-group-items">
                        <input
                        type="text"
                        className="w-100 border-1"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={onChangeHandler}
                        onKeyDown={addNewTask}
                        />
                    </li>
                    {tasklist.map((task, index) => (
                        <Task task={task} key={index} deleteTask={deleteTask} />
                    ))}
                    <TaskCounter count={tasklist.length}/>
                </ul>
            </div>

    )
}