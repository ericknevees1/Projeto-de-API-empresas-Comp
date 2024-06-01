  // controllers/projetoController.js
  const Projeto = require('../models/Projeto');

  exports.createProjeto = async (req, res) => {
    try {
      const projeto = new Projeto(req.body);
      await projeto.save();
      res.status(201).send(projeto);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.getProjetos = async (req, res) => {
    try {
      const projetos = await Projeto.find();
      res.status(200).send(projetos);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.getProjetoById = async (req, res) => {
    try {
      const projeto = await Projeto.findById(req.params.id);
      if (!projeto) {
        return res.status(404).send();
      }
      res.status(200).send(projeto);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.updateProjeto = async (req, res) => {
    try {
      const projeto = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      if (!projeto) {
        return res.status(404).send();
      }
      res.status(200).send(projeto);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  exports.deleteProjeto = async (req, res) => {
    try {
      const projeto = await Projeto.findByIdAndDelete(req.params.id);
      if (!projeto) {
        return res.status(404).send();
      }
      res.status(200).send(projeto);
    } catch (error) {
      res.status(500).send(error);
    }
  };