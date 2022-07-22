import React from "react";

//include images into your bundle
import {Title} from "./Title"
import { List } from "./List";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Title text={"Todos"} />
			<List />
		</React.Fragment>
		
	);
};

export default Home;
