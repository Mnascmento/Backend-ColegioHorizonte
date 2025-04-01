const Sala = require('../models/sala.model.js');

// Criar nova sala
exports.createSala = async (req, res) => {
    try {
        const { numero, andar, tipo } = req.body;
        const sala = new sala({ numero, andar, tipo });
        await sala.save();
        res.status(201).json(sala);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todas as salas
exports.getSalas = async (req, res) => {
    try {
        const sala = await Sala.find().populate('numero', 'andar', 'tipo');
        res.status(200).json(sala);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getSalaById = async (req, res) => {
    try {
        const sala = await Sala.findById(req.params.id).populate('numero', 'andar', 'tipo');
        if (!sala) {
            return res.status(404).json({ message: 'Sala não encontrada' });
        }
        res.status(200).json(sala);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar Sala
exports.updateSala = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, andar, tipo } = req.body;

        const updatedSala = await Sala.findByIdAndUpdate(id, { nome, andar, tipo }, { new: true });
        if (!updatedSala) return res.status(404).json({ message: 'Sala não encontrada' });

        res.status(200).json(updatedSala);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir Sala
exports.deleteSala = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSala = await Sala.findByIdAndDelete(id);
        if (!deletedSala) return res.status(404).json({ message: 'Sala não encontrada' });

        res.status(200).json({ message: 'Sala excluída com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
