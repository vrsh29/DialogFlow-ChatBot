'use strict'

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.port || 5000 ))

//Allows to process data
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

//Routes
app.get('/', (req,res,) =>{
    res.send("Hi i am a chatbot");
})

//Facebook

app.get('/webhook/', (req,res)=> {
    if (req.query['hub.verify_token'] === "varsha") {
        res.send(req.query['hub.challenge'])
    }
        res.send("Wrong token")
})

app.listen(app.get(port), ()=>{
    console.log("running:port")
})