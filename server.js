const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
const port = process.env.PORT || 6112;
app.listen(port, function () {
	console.log(`Server is listening on port: ${port}`);
});
