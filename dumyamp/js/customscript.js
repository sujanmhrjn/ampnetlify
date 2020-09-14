const FAUNADB_SERVER_SECRET = "fnAD1Zoly0ACAWOINaZRmgaYbajpFcCJSp1LJgzE";
var client = new faunadb.Client({
	secret: "fnAD1Zoly0ACAWOINaZRmgaYbajpFcCJSp1LJgzE",
});

console.log(client);
document.getElementById("title").addEventListener("click", function () {
	document.getElementById("title").innerHTML = "Sign In";
});
