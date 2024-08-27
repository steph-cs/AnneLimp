import { Router } from 'express';
const router = Router();
import Servico from '../models/servico.js';

// GET: Listar todos os servicos
router.get('/', async (req, res) => {
  try {
    const servicos = await Servico.find();
    res.status(200).json(servicos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar serviços', error: err });
  }
});

// POST: Criar um novo serviço
router.post('/', async (req, res) => {
  try {
    const novoServico = new Servico(req.body);
    const savedServico = await novoServico.save();
    res.status(201).json(savedServico);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar serviço', error: err });
  }
});

// GET: Obter um servico por ID
router.get('/:id', async (req, res) => {
  try {
    const servico = await Servico.findById(req.params.id);
    if (!servico) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json(servico);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar serviço', error: err });
  }
});

// PUT: Atualizar um servico
router.put('/:id', async (req, res) => {
  try {
    const serviço = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!serviço) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json(serviço);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar serviço', error: err });
  }
});

// DELETE: Deletar um serviço
router.delete('/:id', async (req, res) => {
  try {
    const serviço = await Servico.findByIdAndDelete(req.params.id);
    if (!serviço) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    res.status(200).json({ message: 'Serviço deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar serviço', error: err });
  }
});



// Rota para excluir um precoDuracao de um serviço
router.delete('/:servicoId/precoDuracao/:precoDuracaoId', async (req, res) => {
  const { servicoId, precoDuracaoId } = req.params;

  try {
    // Encontrar o serviço pelo ID
    const servico = await Servico.findById(servicoId);

    if (!servico) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }

    // Remover o precoDuracao com o ID correspondente
    servico.precoDuracao = servico.precoDuracao.filter(
      (pd) => pd._id.toString() !== precoDuracaoId
    );

    // Salvar as alterações
    await servico.save();

    // Retornar o serviço atualizado
    res.status(200).json(servico);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao remover precoDuracao', error: err });
  }
});

// Atualizar um precoDuracao específico de um serviço
router.patch('/:servicoId/precoDuracao/:precoDuracaoId', async (req, res) => {
  const { servicoId, precoDuracaoId } = req.params;
  const { preco, duracao } = req.body;

  try {
    const servico = await Servico.findById(servicoId);
    if (!servico) return res.status(404).json({ message: 'Serviço não encontrado' });

    const precoDuracao = servico.precoDuracao.id(precoDuracaoId);
    if (!precoDuracao) return res.status(404).json({ message: 'precoDuracao não encontrado' });

    // Atualiza os campos fornecidos
    if (preco !== undefined) precoDuracao.preco = preco;
    if (duracao !== undefined) precoDuracao.duracao = duracao;

    await servico.save();
    res.status(200).json(servico);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar precoDuracao', error: err });
  }
});

export default router;
