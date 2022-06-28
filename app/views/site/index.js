const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//Routes
const pessoa = require("../routes/web");

//Body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/pessoa",pessoa);

const sPort = 8000;
const url = "http://localhost:";

app.listen(sPort, ()=>{
 console.log("Server is running on:" +url + sPort);
});