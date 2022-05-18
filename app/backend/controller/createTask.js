const createTask = require('../service/createTask');

module.exports = async (req, res) => {
    try {
        const { descricao, status } = req.body;

        const task = await createTask(descricao, status);
        
        if (!task) throw Error;

        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
