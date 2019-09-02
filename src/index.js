const request = require('request');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
const bookServiceURL = 'https://api.itbook.store/1.0/';

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