import {Router} from 'express';
import bcrypt from 'bcrypt';
import Customer from '../models/customer.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {email, password, name, surname, phone, address, rooms, pet} = req.body;

    const customerByEmail = await Customer.findOne({email});
    if (customerByEmail) {
      return res.status(400).json({message: 'Cliente já cadastrado com este e-mail'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer = new Customer({
      email,
      password: hashedPassword,
      name,
      surname,
      phone,
      address,
      rooms,
      pet,
    });

    res.status(201).json(await newCustomer.save());
  } catch (err) {
    res.status(500).json({message: 'Error to create customer', error: err});
  }
});

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({message: 'Error to find customers', error: err});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({message: 'Customer not found'});
    }
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json({message: 'Error to find customer', error: err});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {email, password, name, surname, phone, address, rooms, pet} = req.body;

    let updateData = {email, name, surname, phone, address, rooms, pet};

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const customerAtualizado = await Customer.findByIdAndUpdate(req.params.id, updateData, {new: true});
    if (!customerAtualizado) {
      return res.status(404).json({message: 'Customer not found'});
    }
    res.status(200).json(customerAtualizado);
  } catch (err) {
    res.status(500).json({message: 'Error to update customer', error: err});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const customerDeletado = await Customer.findByIdAndDelete(req.params.id);
    if (!customerDeletado) {
      return res.status(404).json({message: 'Customer not found'});
    }
    res.status(200).json({message: 'Customer deleted'});
  } catch (err) {
    res.status(500).json({message: 'Error to delete customer', error: err});
  }
});

export default router;
