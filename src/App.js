import React, { Component } from "react";
import api from "./utils/api";
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			studentInfo: {},
			showMenu: false,
			errors: {},
			formInfo: {
				firstname: "",
				lastname: "",
				email: "",
				dob: "",
			},
		};
	}
	componentDidMount() {
		this.saveTodo();
	}
	saveTodo = (e) => {
		const formInfo = this.state.formInfo;
		api
			.create(formInfo)
			.then((response) => {
				console.log(response);
			})
			.catch((e) => {
				console.log("An API error occurred", e);
			});
	};

	handleFormValidation(data) {
		let error = {};
		const { firstname, lastname, email, dob } = data;
		console.log(data);
		const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
		if (!firstname) error.firstname = "Please Enter your firstname";
		if (!lastname) error.lastname = "Please Enter your lastname";
		if (!email) error.email = "Please Enter your email address";
		if (!emailRegex.test(email)) error.email = "Invalid email address";
		if (!dob) error.dob = "Please enter your date of birth";

		return error;
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
		const validateError = this.handleFormValidation(this.state.formInfo);
		const errors = validateError;
		this.setState({ errors });
		if (Object.keys(this.state.errors).length === 0) {
			this.saveTodo();
		}

		return false;
	};

	handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			formInfo: {
				...this.state.formInfo,
				[name]: value,
			},
		});
	};
	render() {
		return (
			<div className="app">
				<form method="post" className="form" onSubmit={this.handleFormSubmit}>
					<fieldset>
						<legend>User Information</legend>

						<div className="flex">
							<div className="col">
								<div className="form-group">
									<label>First Name*</label>
									<input
										type="text"
										className="form-control"
										name="firstname"
										id="validate-firstname"
										placeholder="Enter First Name"
										onChange={this.handleInputChange}
									/>
								</div>
							</div>

							<div className="col">
								<div className="form-group">
									<label>Last Name*</label>
									<input
										type="text"
										className="form-control"
										name="lastname"
										id="validate-lastname"
										placeholder="Enter Last Name"
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label>Email Address*</label>
							<input
								type="email"
								className="form-control"
								name="email"
								id="validate-email"
								placeholder="Enter Email Address"
								onChange={this.handleInputChange}
							/>
						</div>

						<div className="form-group">
							<label>Date of Birth</label>
							<input
								type="date"
								className="form-control"
								name="dob"
								id="validate-dob"
								placeholder="1990-01-01"
								onChange={this.handleInputChange}
							/>
						</div>
					</fieldset>
					<input type="submit" value="Submit" className="button" />
				</form>
			</div>
		);
	}
}
