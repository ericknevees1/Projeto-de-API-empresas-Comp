  // controllers/tarefaController.js
  const Tarefa = require('../models/Tarefa');

  exports.createTarefa = async (req, res) => {
    try {
      const tarefa = new Tarefa(req.body);
      await tarefa.save();
      res.status(201).send(tarefa);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.getTarefas = async (req, res) => {
    try {
      const tarefas = await Tarefa.find();
      res.status(200).send(tarefas);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.getTarefaById = async (req, res) => {
    try {
      const tarefa = await Tarefa.findById(req.params.id);
      if (!tarefa) {
        return res.status(404).send();
      }
      res.status(200).send(tarefa);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.updateTarefa = async (req, res) => {
    try {
      const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!tarefa) {
        return res.status(404).send();
      }
      res.status(200).send(tarefa);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.deleteTarefa = async (req, res) => {
    try {
      const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
      if (!tarefa) {
        return res.status(404).send();
      }
      res.status(200).send(tarefa);
    } catch (error) {
      res.status(500).send(error);
    }
  };