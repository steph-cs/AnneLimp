import {Router} from 'express';

const router = Router();
import Service from '../models/service.js';

router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({message: 'Error to find services', error: err});
  }
});

router.post('/', async (req, res) => {
  try {
    const novoService = new Service(req.body);
    const savedService = await novoService.save();
    res.status(201).json(savedService);
  } catch (err) {
    res.status(500).json({message: 'Error to create service', error: err});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({message: 'Service not found'});
    }
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({message: 'Error to find service', error: err});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!service) {
      return res.status(404).json({message: 'Service not found'});
    }
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({message: 'Error to update service', error: err});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({message: 'Service not found'});
    }
    res.status(200).json({message: 'Service deleted'});
  } catch (err) {
    res.status(500).json({message: 'Error to delete service', error: err});
  }
});

router.delete('/:serviceId/price/:priceId', async (req, res) => {
  const {serviceId, priceId} = req.params;

  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({message: 'Service not found'});
    }

    service.price = service.price.filter(
      (pd) => pd._id.toString() !== priceId
    );

    res.status(200).json(await service.save());
  } catch (err) {
    res.status(500).json({message: 'Error to delete price', error: err});
  }
});

router.patch('/:serviceId/price/:priceId', async (req, res) => {
  const {serviceId, priceId} = req.params;
  const {price : newPrice, duration} = req.body;

  try {
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({message: 'Service not found'});

    const price = service.price.id(priceId);
    if (!price) return res.status(404).json({message: 'Price in service not found'});

    if (newPrice !== undefined) price.price = newPrice;
    if (duration !== undefined) price.duration = duration;

    res.status(200).json(await service.save());
  } catch (err) {
    res.status(500).json({message: 'Error to update price', error: err});
  }
});

export default router;
