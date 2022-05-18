const deleteTask = require('../service/deleteTask.js');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await deleteTask(id);

        if (!task) throw Error;

        res.status(204).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
