import { Router } from 'express';
import Cliente from '../models/cliente.js'
import bcrypt from 'bcrypt';
import Cliente from '../models/cliente.js';

const router = Router();

// POST: Criar novo cliente
router.post('/', async (req, res) => {
  try {
    const { email, senha, nome, sobrenome, telefone, endereco, comodos, pet } = req.body;

    // Verifica se o cliente já existe
    const clienteExistente = await Cliente.findOne({ email });
    if (clienteExistente) {
      return res.status(400).json({ message: 'Cliente já cadastrado com este e-mail' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    const novoCliente = new Cliente({
      email,
      senha: hashedPassword,
      nome,
      sobrenome,
      telefone,
      endereco,
      comodos,
      pet,
    });

    const clienteSalvo = await novoCliente.save();
    res.status(201).json(clienteSalvo);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar cliente', error: err });
  }
});

// GET: Listar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter clientes', error: err });
  }
});

// GET: Obter um cliente por ID
router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter cliente', error: err });
  }
});

// PUT: Atualizar um cliente
router.put('/:id', async (req, res) => {
  try {
    const { email, senha, nome, sobrenome, telefone, endereco, comodos, pet } = req.body;

    let updateData = { email, nome, sobrenome, telefone, endereco, comodos, pet };

    // Criptografar a senha, se for atualizada
    if (senha) {
      const hashedPassword = await bcrypt.hash(senha, 10);
      updateData.senha = hashedPassword;
    }

    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!clienteAtualizado) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.status(200).json(clienteAtualizado);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar cliente', error: err });
  }
});

// DELETE: Deletar um cliente
router.delete('/:id', async (req, res) => {
  try {
    const clienteDeletado = await Cliente.findByIdAndDelete(req.params.id);
    if (!clienteDeletado) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.status(200).json({ message: 'Cliente excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir cliente', error: err });
  }
});

export default router;
