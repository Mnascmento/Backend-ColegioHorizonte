const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cpf: {type: String, require: true},
    senha: { type: String, required: true },
    profile: { type: String, enum: ['aluno', 'professor', 'coordenador'], required: true }
});

// Middleware para criptografar senha antes de salvar
userSchema.pre('save', async function (next) {
    if (!this.isModified('senha')) return next();
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
