const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
  async register(data) {
    // Hash password biar aman (gak teks biasa di database)
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({
      ...data,
      password: hashedPassword
    });
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User gak ketemu bre!');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Password salah!');

    // Bikin token buat akses API
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
  }
}

module.exports = new AuthService();