require('dotenv').config();
const express = require('express');

const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT  = process.env.PORT || 9000;

app.use(express.static('public'));


//Template engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


//this is used to parse the body of the request
app.use('/', require('./server/routes/main'));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});