const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', "ejs");
app.set('views', path.join(__dirname,('views')));

//middleware
app.use(morgan('dev'));

//server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})