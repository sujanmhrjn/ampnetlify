/* Api methods to call /functions */

const create = (data) => {
	return fetch("/.netlify/functions/formdetails-create", {
		body: JSON.stringify(data),
		method: "POST",
	}).then((response) => {
		return response.json();
	});
};

const readAll = () => {
	return fetch("/.netlify/functions/formdetails-read").then((response) => {
		return response.json();
	});
};
export default {
	create: create,
	read: readAll,
};
