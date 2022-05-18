const { Tasks } = require('../models');

module.exports = (descricao, status, id) => {
  return Tasks.update({ descricao, status }, { where: { id } });
};
