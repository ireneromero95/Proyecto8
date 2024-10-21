const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    },
    plataformaUsada: {
      type: mongoose.Types.ObjectId,
      required: false,
      ref: 'plataformas'
    }
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

//Importante no hacer esto como arrow function porque si no el this se raya
//El 10 son las veces que se encriptan, 10 está bien, para que no tarde tanto la peticion
//El pre es antes de que se salve
userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('users', userSchema, 'users');
module.exports = User;
