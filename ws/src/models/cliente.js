import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Por favor, insira um e-mail válido'],
  },
  senha: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  sobrenome: {
    type: String,
    required: true,
    trim: true,
  },
  telefone: {
    type: String,
    required: true,
    trim: true,
  },
  endereco: {
    cep: { type: String, required: true, trim: true },
    numero: { type: Number, required: true },
    complemento: { type: String, trim: true },
  },
  comodos: {
    quartos: { type: Number, required: true, default: 0 },
    banheiros: { type: Number, required: true, default: 0 },
    cozinhas: { type: Number, required: true, default: 0 },
    salas: { type: Number, required: true, default: 0 },
    varandas: { type: Number, required: true, default: 0 },
    area_externa: { type: Number, required: true, default: 0 },
  },
  pet: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;