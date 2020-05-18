const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const ConnectDB = require('./connectDb/connectDB');
const path = require("path");



//set static folder
app.use("/", express.static(path.join(__dirname + "/public")));

// configuring middleware
app.use(express.json({ extended: false }));


// cooecting to databse
ConnectDB();


// getting the routes file
const routes = require("./route/api/Crud");
app.use("/api", routes);

app.listen(port, () => console.log(`server is listining on port ${port} `));