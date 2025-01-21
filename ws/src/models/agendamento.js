import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema({
  cliente_id: {
    type: mongoose.Schema.Types.ObjectId,  // Relaciona com o ID do cliente
    ref: 'Cliente',  // Referência ao modelo Cliente
    required: true,
  },
  service_id: {
    type: mongoose.Schema.Types.ObjectId,  // Relaciona com o ID do serviço
    ref: 'Servico',  // Referência ao modelo Serviço
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
}, { timestamps: true });  // timestamps adiciona createdAt e updatedAt automaticamente


const Agendamento = mongoose.model('Agendamento', agendamentoSchema);
export default Agendamento;