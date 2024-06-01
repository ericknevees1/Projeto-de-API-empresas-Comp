const Departamento = require('../models/Departamento');

module.exports = {
  async index(req, res) {
    const departamentos = await Departamento.find();
    return res.json(departamentos);
  },

  async show(req, res) {
    const { id } = req.params;
    const departamento = await Departamento.findById(id);
    return res.json(departamento);
  },

  async store(req, res) {
    const { nome, descricao } = req.body;
    const departamento = await Departamento.create({ nome, descricao });
    return res.json(departamento);
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    const departamento = await Departamento.findByIdAndUpdate(id, { nome, descricao }, { new: true });
    return res.json(departamento);
  },

  async destroy(req, res) {
    const { id } = req.params;
    await Departamento.findByIdAndDelete(id);
    return res.send();
  },
};