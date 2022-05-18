module.exports = async (req, res, next) => {
  try {
    const { descricao, status } = req.body;

    if (!descricao) {
      return res.status(400).json({ message: '"descriçao" is required' });
    }

    if (!status) {
      return res.status(400).json({ message: '"status" is required' });
    }

    if (status !== 'pendente' && status !== 'em andamento' && status !== 'pronto') {
      return res.status(400).
        json({ message: '"status" deve ser: pendente, em andamento ou pronto' });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
