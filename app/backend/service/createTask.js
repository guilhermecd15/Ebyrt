const { Tasks } = require('../models');

module.exports = (descricao, status) => {
    return Tasks.create({descricao, status});
};
