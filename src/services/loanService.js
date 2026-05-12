const Item = require('../models/Item');

class LoanService {
  async borrowItem(itemId) {
    const item = await Item.findByPk(itemId);
    
    if (!item) throw new Error('Barangnya nggak ada bre!');
    if (item.status === 'borrowed' || item.stock < 1) {
      throw new Error('Barang lagi dipinjam orang lain!');
    }

    // Update status barang
    item.status = 'borrowed';
    item.stock -= 1;
    await item.save();

    return item;
  }
}

module.exports = new LoanService();