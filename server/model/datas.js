const mongoose = require('mongoose')

const schemaDatas = new mongoose.Schema({
  deskripsi: String,
  img: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
const Data = mongoose.model('Data', schemaDatas);

module.exports = Data
