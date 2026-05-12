const loanService = require('../services/loanService');
const Item = require('../models/Item'); // Kita butuh model Item di sini

// Fungsi Pinjam Barang (Yang sudah lo buat tadi)
exports.processLoan = async (req, res) => {
  try {
    const { itemId } = req.body;
    const updatedItem = await loanService.borrowItem(itemId);
    res.json({ message: 'Peminjaman berhasil!', data: updatedItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fungsi LIHAT SEMUA BARANG (Tambahan baru)
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};