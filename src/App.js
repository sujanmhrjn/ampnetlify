import React, { Component } from "react";
import api from "./utils/api";
export default class App extends Component {
	state = {
		todos: [],
		showMenu: false,
	};
	componentDidMount() {
		this.saveTodo();
	}
	saveTodo = (e) => {
		const formInfo = {
			firstName: "Sujan",
			lastName: "Maharjan",
			email: "sujan-28@gmail.com",
			dob: "1111-11-11",
		};
		api
			.create(formInfo)
			.then((response) => {
				console.log(response);
			})
			.catch((e) => {
				console.log("An API error occurred", e);
			});
	};
	render() {
		return <div className="app">App</div>;
	}
}
