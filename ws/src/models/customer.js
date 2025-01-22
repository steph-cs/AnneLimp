import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Por favor, insira um e-mail válido'],
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    postalCode: {type: String, required: true, trim: true},
    number: {type: Number, required: true},
    complement: {type: String, trim: true},
  },
  rooms: {
    bedroom: {type: Number, required: true, default: 0},
    bathroom: {type: Number, required: true, default: 0},
    kitchen: {type: Number, required: true, default: 0},
    livingRoom: {type: Number, required: true, default: 0},
    balcony: {type: Number, required: true, default: 0},
    backyard: {type: Number, required: true, default: 0},
  },
  pet: {
    type: Boolean,
    required: true,
  },
}, {timestamps: true});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;