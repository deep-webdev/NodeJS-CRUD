const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Node_CRUD';
const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

app.use(express.json());

con.on('open', () => {
    console.log('connected successfully....')
});

const dreamsRouter = require('../CRUD-JS/routes/crud');
app.use('/dreams', dreamsRouter)

app.listen(8080, function() {
    console.log('Server Started.....')
})