  // models/Tarefa.js
  const mongoose = require('mongoose');

  const TarefaSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['pendente', 'em andamento', 'concluída'],
      default: 'pendente'
    },
    projeto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Projeto',
      required: true
    }
  });

  module.exports = mongoose.model('Tarefa', TarefaSchema);