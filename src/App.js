import React, { useState, useEffect } from "react";

const App = () => {
	const [data, setData] = useState(null);
	const detail = {
		name: "Sujan Maharjan",
		email: "sujan@gmail.com",
		date: "1993-11-03",
	};

	useEffect(() => {
		api
			.create(detail)
			.then((response) => {
				console.log(response);

				setData(detail);
			})
			.catch((e) => {
				console.log("An API error occurred", e);
			});
	}, []);
	return <div>Hello World</div>;
};

export default App;
