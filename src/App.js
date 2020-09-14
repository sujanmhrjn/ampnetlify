import React, { useState, useEffect } from "react";
import api from "./utils/api";
const App = () => {
	const [data, setData] = useState(null);
	const detail = {
		name: "Sujan Maharjan",
		email: "sujan@gmail.com",
		date: "1993-11-03",
	};
	console.log(detail);

	console.log(data);
	return <div>Hello World</div>;
};

export default App;
