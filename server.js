// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 9000;

// Sets up the Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public'))); //Serves resources from public folder


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// (DATA)
// =============================================================


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  