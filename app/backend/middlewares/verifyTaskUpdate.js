module.exports = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (status !== 'Pendente' && status !== 'Em andamento' && status !== 'Pronto') {
      return res.status(400).
        json({ message: '"status" deve ser: Pendente, Em andamento ou Pronto' });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
