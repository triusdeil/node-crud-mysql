const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 5000);

//middleware
app.use(morgan('dev'))

//server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})