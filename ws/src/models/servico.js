import mongoose from 'mongoose';

const precoDuracaoSchema = new mongoose.Schema({
  preco: {
    type: Number,
    required: true,
  },
  duracao: {
    type: Number, // duração em horas
    required: true,
  },
});

const descricaoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  atividades: {
    type: [String], // array de strings para listar as atividades
    required: true,
  },
});

const servicoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['simples', 'pesada'], // restringe os valores possíveis para 'simples' ou 'pesada'
    required: true,
  },
  descricao: {
    type: descricaoSchema,
    required: true,
  },
  precoDuracao: {
    type: [precoDuracaoSchema], // array de objetos contendo preço e duração
    required: true,
  },
});

const Servico = mongoose.model('Servico', servicoSchema);
export default Servico;