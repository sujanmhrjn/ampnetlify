const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = (event, context) => {
	console.log("Function `read-all` invoked");
	/* configure faunaDB Client with our secret */
	const client = new faunadb.Client({
		secret: process.env.FAUNADB_SERVER_SECRET,
	});
	return client
		.query(q.Paginate(q.Match(q.Collection("formDetails"))))
		.then((response) => {
			const todoRefs = response.data;
			console.log("Todo refs", todoRefs);
		})
		.catch((error) => {
			console.log("error", error);
			return {
				statusCode: 400,
				body: JSON.stringify(error),
			};
		});
};
