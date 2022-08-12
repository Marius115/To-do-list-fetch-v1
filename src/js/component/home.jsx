import React from "react";
import { useEffect,useState } from "react";

//intento de to do list en pagina unica
//put(para add y delete) y post
//falta delete



const Home = () => {
	const initialState = { label: "", done: false };

	const baseUrl = "https://assets.breatheco.de/apis/fake/todos/user";
	const [task, setTask] = useState(initialState);
	const [todos, setTodos] = useState([]);
	function handleChange(e) {
		setTask({ ...task, [e.target.name]: e.target.value });
	}

// Metodo PUT
	async function addTask(event) {
		if (event.key === "Enter") {
			if (task.label.trim() !== "") {
				let response = await fetch(`${baseUrl}/mariano`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify([...todos, task]),
				});
				if (response.ok) {
					getTask();
					setTask(initialState);
				}
			}
		}
	}
	
	
//Metodo Post
	async function getTask() {
		try {
			let response = await fetch(`${baseUrl}/mariano`);
			if (response.ok) {
				let data = await response.json();
				setTodos(data);
			} else {
				try {
					let responseTwo = await fetch(`${baseUrl}/mariano`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify([]),
					});
					if (response.ok) {
						getTask();
					}
				} catch (error) {
					console.log(error);
				}
			}
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

// DELETE!
	async function deleteTask(id) {
		let newTask = todos.filter((ta, index) => id !== index);

		let response = await fetch(`${baseUrl}/mariano`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTask),
		});
		if (response.ok) {
			getTask();
		}
		setTodos(newTask);
	}

	useEffect(() => {
		getTask();
	}, []);

	return (
		<div className="container">
			<div className="row d-flex justify-content-center p-3">
				<div className="col-12 col-md-6">
					<h1 className="text-center fw-light opacity-25 my-3"> ToDo List Fetch</h1>
					<form
						onSubmit={(event) => {
							event.preventDefault();
						}}>
						<input
							type="text"
							placeholder="add your task"
							className="form-control"
							value={task.label}
							onChange={handleChange}
							onKeyDown={addTask}
							name="label"
							//eventos
						/>
					</form>
					{todos.length > 0 ? (
						<p 
						className="text-muted"> tienes {todos.length} tareas restantes</p>
					) : (
						<p
						className="text-black-50"
						>No tienes tareas pendientes.</p>
					)}
					{/*//operador*/}
					<ul>
						{todos.map((ta, index) => {
							return (
								<li className="text-muted"
									key={index}
									onClick={() => {
										deleteTask(index);
									}}>
									{ta.label}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;

