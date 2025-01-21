import { Router } from 'express';

import Agendamento from '../models/agendamento.js';
import Cliente from '../models/cliente.js';
import Servico from '../models/servico.js';

const router = Router();

// Criar novo agendamento (POST)
router.post('/', async (req, res) => {
  try {
    const { cliente_id, service_id, data, hora, forma_pagamento } = req.body;

    // Verifica se o cliente e o serviço existem
    const cliente = await Cliente.findById(cliente_id);
    const servico = await Servico.findById(service_id);
    if (!cliente || !servico) {
      return res.status(400).json({ message: 'Cliente ou serviço não encontrado' });
    }

    const novoAgendamento = new Agendamento({
      cliente_id,
      service_id,
      data,
      hora,
      forma_pagamento,
    });

    const agendamentoSalvo = await novoAgendamento.save();
    res.status(201).json(agendamentoSalvo);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar agendamento', error: err });
  }
});

// Obter todos os agendamentos (GET)
router.get('/', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find().populate('cliente_id').populate('service_id');
    res.status(200).json(agendamentos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter agendamentos', error: err });
  }
});

// Obter um agendamento específico por ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const agendamento = await Agendamento.findById(req.params.id).populate('cliente_id').populate('service_id');
    if (!agendamento) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.status(200).json(agendamento);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter agendamento', error: err });
  }
});

// Atualizar um agendamento (PUT)
router.put('/:id', async (req, res) => {
  try {
    const { cliente_id, service_id, data, hora, forma_pagamento } = req.body;

    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(req.params.id, {
      cliente_id,
      service_id,
      data,
      hora,
      forma_pagamento,
    }, { new: true });

    if (!agendamentoAtualizado) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }

    res.status(200).json(agendamentoAtualizado);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar agendamento', error: err });
  }
});

// Excluir um agendamento (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const agendamentoDeletado = await Agendamento.findByIdAndDelete(req.params.id);
    if (!agendamentoDeletado) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    res.status(200).json({ message: 'Agendamento excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir agendamento', error: err });
  }
});

export default router;
