const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World! from 00002");
});

app.listen(8080, () => {
	console.log("Listening");
});
