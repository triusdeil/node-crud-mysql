const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const myConnection = require('express-myconnection');
const mysql = require('mysql');
//imports
const customerRoutes = require('./routes/customerRoute')

//settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

//middleware
app.use(morgan('dev'));

app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'',
    port: 3306,
    database:'nodemysql',
},'single'));

//routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));

//server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})