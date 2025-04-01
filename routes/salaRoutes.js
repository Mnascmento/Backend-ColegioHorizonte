const express = require('express');
const router = express.Router();
const { createSala, getSalas, updateSala, deleteSala, getSalaById } = require('../controllers/salaController');

// Rotas de salas
router.post('/', createSala);
router.get('/', getSalas);
router.get('/:id', getSalaById);
router.put('/:id', updateSala); // Rota para atualizar sala
router.delete('/:id', deleteSala); // Rota para deletar sala

module.exports = router;
