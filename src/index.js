const request = require('request');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
const bookServiceURL = 'https://api.itbook.store/1.0/';


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/*",(req, res) => {
    const param = req.params[0] || 'search';
    debugger;
    request({url:`${bookServiceURL}${param}`},(error, response) => {
        debugger;
        if(error){
            res.send(error);
        }else {
            res.send(response.body);
        }
    })
});

app.listen(port, () => {
    console.log('Application is running on port ', port);
})