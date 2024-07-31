const express = require('express');


const bodyParser = require('body-parser');

const loginRoutes = require('./routes/loginroutes');
const messageRoutes = require('./routes/messageroutes');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes);
app.use(messageRoutes);

app.use((req, res, next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
})

app.listen(4000);