import mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number, // duração em horas
    required: true,
  },
});

const descriptionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  activities: {
    type: [String],
    required: true,
  },
});

const serviceSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['simples', 'pesada'],
    required: true,
  },
  description: {
    type: descriptionSchema,
    required: true,
  },
  price: {
    type: [priceSchema],
    required: true,
  },
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;