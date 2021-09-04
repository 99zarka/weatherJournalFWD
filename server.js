// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 6969;
const server=app.listen(port,function(){console.log("server is running on port",port)});

app.get('/forecast',function(req,res){
    res.send(projectData);
})

app.post('/addNewData',function(req,res){
    projectData['temperature']=req.body.temperature;
    projectData['date']=req.body.date;
    projectData['userResponse']=req.body.userResponse;
    //app.listen(port,function(){console.log(9,projectData)});
    console.log(projectData);
    res.end("{}");
})
