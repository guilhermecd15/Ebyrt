require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Routes');

const app = express();
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', routes.getTasks);
app.post('/', routes.verifyTask, routes.createTask);
app.delete('/:id', routes.deleteTask)
app.put('/:id', routes.verifyTaskUpdate, routes.updateTask)

app.listen(3000);
