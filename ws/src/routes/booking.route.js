import {Router} from 'express';

import Booking from '../models/booking.js';
import Customer from '../models/customer.js';
import Service from '../models/service.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {customer_id, service_id, date} = req.body;

    const customer = await Customer.findById(customer_id);
    const service = await Service.findById(service_id);
    if (!customer || !service) {
      return res.status(400).json({message: 'Customer or service not found'});
    }

    const newBooking = new Booking({
      customer_id,
      service_id,
      date
    });

    res.status(201).json(await newBooking.save());
  } catch (err) {
    res.status(500).json({message: 'Error to create booking', error: err});
  }
});

router.get('/', async (req, res) => {
  try {
    let bookings = await Booking.find().populate('customer_id').populate('service_id')

    bookings = bookings.map((booking) => {
      const {customer_id, service_id, ...rest} = booking._doc;
      return {
        ...rest,
        customer: customer_id,
        service: service_id,
      };
    });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({message: 'Error to find bookings', error: err});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('customer_id').populate('service_id');
    if (!booking) {
      return res.status(404).json({message: 'Booking not found'});
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({message: 'Error to find booking', error: err});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {customer_id, service_id, date,} = req.body;

    const bookingUpdated = await Booking.findByIdAndUpdate(req.params.id, {
      customer_id,
      service_id,
      date
    }, {new: true});

    if (!bookingUpdated) {
      return res.status(404).json({message: 'Booking not found'});
    }

    res.status(200).json(bookingUpdated);
  } catch (err) {
    res.status(500).json({message: 'Error to update booking', error: err});
  }
});

router.delete('/:id', async (req, res) => {
  const bookingId = req.params.id
  try {
    const bookingDeleted = await Booking.findByIdAndDelete(bookingId);
    if (!bookingDeleted) {
      return res.status(404).json({message: 'Booking not found: ' + bookingId});
    }
    res.status(200).json({message: 'Booking deleted'});
  } catch (err) {
    res.status(500).json({message: 'Error to delete booking: ' + bookingId, error: err});
  }
});

export default router;
