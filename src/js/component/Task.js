import React from "react";

export const Task = ({ task, deleteTask }) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<p className="m-0">{task}</p>
			<i
				className="fa-solid taskete fa-x opacity-25 mt-1"
				onClick={() => deleteTask(task)}>
			</i>
		</li>
	);
};