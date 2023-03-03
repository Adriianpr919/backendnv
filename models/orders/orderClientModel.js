//Create table for order client
import mongoose from 'mongoose';

const orderclientSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  reference: { type: String, required: true },
  marker: { type: String, required: true },
  client: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true //for date
});

const OrderClient = mongoose.model('OrderClient', orderclientSchema);
export default OrderClient;