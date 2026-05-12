const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const authMiddleware = require('../middleware/authMiddleware');

// Route buat pinjam (pake token)
router.post('/borrow', authMiddleware, loanController.processLoan);

// Route buat lihat semua barang (bisa tanpa token biar dosen gampang cek)
router.get('/items', loanController.getAllItems);

module.exports = router;