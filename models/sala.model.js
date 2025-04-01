const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
    numero: { type: String, required: true },
    andar: { type: String, required: true },
    tipo: { type: String, enum: ['laboratório', 'auditório', 'tradicional'], required: true }
});

const Sala = mongoose.model('Sala', salaSchema);

module.exports = Sala;
