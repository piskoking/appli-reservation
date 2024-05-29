const express = require('express');
const cors = require("cors") 
require('dotenv' , {path : "./config/.env"}) 
require("./Config/db.js")
const route= require("./Routers/Router")
const app = express();
const port = 5000

app.use(cors());

app.use(express.json())

app.use("/api", route)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
