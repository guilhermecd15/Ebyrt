const { Tasks } = require('../models');

module.exports = (id) => {
  return Tasks.destroy(
    { where: { id } },
  );
};
