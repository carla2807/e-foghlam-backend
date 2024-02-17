const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComisionSchema = Schema({
  nombre: String,
  año: Number,
  turno: String,
  alumno: String,
  createAtt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comision', ComisionSchema);