const createTask = require('../controller/createTask');
const verifyTask = require('../middlewares/verifyTask');
const getTasks = require('../controller/getTasks');
const deleteTask = require('../controller/deleteTask');
const verifyTaskUpdate = require('../middlewares/verifyTaskUpdate');
const updateTask = require('../controller/updateTask');

module.exports = {
    createTask,
    verifyTask,
    getTasks,
    deleteTask,
    verifyTaskUpdate,
    updateTask,
};