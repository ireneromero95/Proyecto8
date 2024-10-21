const mongoose = require('mongoose');

const plataformaSchema = new mongoose.Schema(
  {
    plataformaName: { type: String, required: true },
    imagen: { type: String, required: true }
  },
  { timestamps: true, collection: 'plataformas' }
);

const Plataforma = mongoose.model(
  'plataformas',
  plataformaSchema,
  'plataformas'
);

module.exports = Plataforma;
