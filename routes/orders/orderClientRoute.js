import express from 'express';
import OrderClient from '../../models/orders/orderClientModel.js';

const orderclientRouter = express.Router();

// get all order client -> for admin panel
orderclientRouter.get('/all', async (req, res) => {
  const ordersclients = await OrderClient.find();
  res.send(ordersclients);
});

//get order client -> by id
orderclientRouter.get('/find/:id', async (req, res) => {
  const orderclient = await OrderClient.findById(req.params.id);
  if (orderclient) {
    res.send(orderclient);
  } else {
    res.status(404).send({ message: "¡.Pedido NO Encontrado.!" });
  }
});

//count order client -> for admin panel
orderclientRouter.get('/countOrderClients', async (req, res) => {

  try {
    const countOrdersClients = await OrderClient.countDocuments();
    res.status(200).json({ count: countOrdersClients });

  } catch (err) {
    console.log(err.message);
  }

});

//delete order client
orderclientRouter.delete('/delete/:id', async (req, res) => {

  try {

    await OrderClient.findByIdAndDelete(req.params.id);
    res.status(200).json('¡.El Pedido Ha Sido Eliminado.!');

  } catch (err) {
    console.log('¡.NO Se Puede Eliminar.!');
  }

});

// update order client -> from admin panel
orderclientRouter.put('/update', async (req, res) => {

  const orderclient = await OrderClient.findById(req.body._id);

  //if orderclient exists
  if (orderclient) {
    orderclient.number = req.body.number || orderclient.number;
    orderclient.reference = req.body.reference || orderclient.reference;
    orderclient.marker = req.body.marker || orderclient.marker;
    orderclient.client = req.body.client || orderclient.client;
    orderclient.email = req.body.email || orderclient.email;
    orderclient.address = req.body.address || orderclient.address;
    orderclient.description = req.body.description || orderclient.description;
    orderclient.phone = req.body.phone || orderclient.phone;
    orderclient.price = req.body.colors || orderclient.price;

    const updatedOrderClient = await orderclient.save();
    res.send({

      _id: updatedOrderClient._id,
      number: updatedOrderClient.number,
      reference: updatedOrderClient.reference,
      marker: updatedOrderClient.marker,
      client: updatedOrderClient.client,
      email: updatedOrderClient.email,
      address: updatedOrderClient.address,
      description: updatedOrderClient.description,
      phone: updatedOrderClient.phone,
      price: updatedOrderClient.price,

    });
  } else {

    res.status(401).send({ message: '¡.Pedido NO Encontrado.!' });

  }
});

// for add order client -> from admin panel
orderclientRouter.post('/add', async (req, res) => {
  const newOrderClient = new OrderClient({
    number: req.body.number,
    reference: req.body.reference,
    marker: req.body.marker,
    client: req.body.client,
    email: req.body.email,
    address: req.body.address,
    description: req.body.description,
    phone: req.body.phone,
    price: req.body.price,
  });
  const orderclient = await newOrderClient.save();
  res.send({
    _id: orderclient._id,
    number: orderclient.number,
    reference: orderclient.reference,
    marker: orderclient.marker,
    client: orderclient.client,
    email: orderclient.email,
    address: orderclient.address,
    description: orderclient.description,
    phone: orderclient.phone,
    price: orderclient.price,
  })
});

export default orderclientRouter;