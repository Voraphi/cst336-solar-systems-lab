const express = require("express");
const app = express();

app.engine('html', require("ejs").renderFile);
app.use(express.static("public"));
// app.set("view engine", "html");

//routes
app.get("/", function (request, response) {
    response.render("index.html");
});

app.get("/mercury", function(request, response) {
   response.render("mercury.html"); 
});

app.get("/venus", function(request, response) {
   response.render("venus.html"); 
});

app.get("/earth", function(request, response) {
   response.render("earth.html"); 
});

app.get("*", function(request, response) {
   response.render("error.html"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express Server is Running...");
});