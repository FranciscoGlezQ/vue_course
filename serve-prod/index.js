var express = require("express");
const path = require("path");
var app = express();
const distPath = path.join(__dirname, "../dist");

// Serve all the files in '/dist' directory
app.use(express.static(distPath));
app.all("*", (_req, res) => {
	try {
		res.sendFile(path.join(distPath, "index.html"));
	} catch (error) {
		res.json({ success: false, message: "Something went wrong" });
	}
});

const port = 80;
app.listen(port, function() {
	console.log("Example app listening on port ", port);
});
