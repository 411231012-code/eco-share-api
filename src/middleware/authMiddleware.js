const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) return res.status(401).json({ error: 'Mana tokennya bre? Login dulu!' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // Lanjut ke proses berikutnya
  } catch (err) {
    res.status(400).json({ error: 'Token lo basi/salah!' });
  }
};