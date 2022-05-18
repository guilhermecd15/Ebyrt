const getTasks = require('../service/getTasks');

module.exports = async (req, res) => {
  try {
    const tasks = await getTasks();

    if (!tasks) throw Error;

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
