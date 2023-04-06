const express = require('express');
const routers = require('./router');

const app = express();

app.use(express.json());

app.use('/login', routers.loginRouter);

module.exports = app;