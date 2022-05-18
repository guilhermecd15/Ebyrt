module.exports = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!status) return next();

    if (status !== 'pendente' && status !== 'em andamento' && status !== 'pronto') {
      return res.status(400).
        json({ message: '"status" deve ser: pendente, em andamento ou pronto' });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
