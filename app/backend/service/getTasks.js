const { Tasks } = require('../models');

module.exports = () => {
    return Tasks.findAll();
};
