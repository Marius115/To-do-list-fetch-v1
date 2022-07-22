import React from "react";

export const TaskCounter = ({ count }) => {
	return (
		<li className="list-group-item">
			<p className=" opacity-50 m-0">{count} item left</p>
		</li>
	);
};
