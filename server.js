
import express from 'express';

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/heroku-demo-trail'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/heroku-demo-trail/' });
});
app.listen(process.env.PORT || 8080);



