const mongoose = require('mongoose');

const cancionesSchema = new mongoose.Schema(
  {
    songName: { type: String, required: true },
    imagen: { type: String, required: true },
    genero: {
      type: String,
      required: true,
      enum: ['Pop', 'Hip-hop', 'Jazz', 'Trap', 'Rock', 'Tecno']
    },
    cantante: { type: String, required: true },
    plataformas: [
      { type: mongoose.Types.ObjectId, required: false, ref: 'plataformas' }
    ],
    verified: { type: Boolean, required: true }
  },
  { timestamps: true, collection: 'canciones' }
);

const Cancion = mongoose.model('canciones', cancionesSchema, 'canciones');

module.exports = Cancion;
