const updateTask = require('../service/updateTask.js');

module.exports = async (req, res) => {
    try {
        const { descricao, status } = req.body;
        const { id } = req.params;
        const task = await updateTask(descricao, status, id);
        
        if (!task) throw Error;

        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
