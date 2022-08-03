const express = require("express");
const conn = require("./db_connection");
var sequelize = require('sequelize');

const app = express();
conn.connectDb();
//importing the models
let normalizedPath = require('path').join('.',"models")
require('fs').readdirSync(normalizedPath).forEach((file) => {
  console.log(file);
        sequelize.import('./models/' + file)
    })
let { Comments, User } = sequelize.models
    
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));