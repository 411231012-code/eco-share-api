const express = require('express');
const sequelize = require('./src/config/database');
// Import model supaya kebaca sama Sequelize
const Item = require('./src/models/Item');
const User = require('./src/models/user');

const app = express();
app.use(express.json());

const authRoutes = require('./src/routes/authRoutes');

// ... kode sebelumnya ...
app.use('/api/auth', authRoutes);
const loanRoutes = require('./src/routes/loanRoutes');
app.use('/api/loan', loanRoutes);

// Sinkronisasi Tabel (Ini yang bikin tabel otomatis)
sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('🚀 Database Connected & Tables Created!');
  })
  .catch(err => console.log('❌ Error: ' + err));

app.listen(3000, () => console.log('✅ MServer jalan di port 3000'));