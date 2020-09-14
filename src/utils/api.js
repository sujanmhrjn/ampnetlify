const create = (data) => {
	return fetch("/.netlify/functions/create", {
		body: JSON.stringify(data),
		method: "POST",
	}).then((response) => {
		return response.json();
	});
};

export default {
	create: create,
};
