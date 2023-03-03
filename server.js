import express, { urlencoded } from 'express'; //"type": "module",
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './routes/seed/seedRoute.js';
import userRouter from './routes/users/userRoute.js';
import blogRouter from './routes/blogs/blogRoute.js';
import productRouter from './routes/products/productRoute.js';
import categoryRouter from './routes/categorias/categoryRoute.js';
import subcategoryRouter from './routes/categorias/subcategoryRoute.js';
import ratingRouter from './routes/ratings/ratingRoute.js';
import orderRouter from './routes/orders/orderRoute.js';
import orderclientRouter from './routes/orders/orderClientRoute.js';

const app = express();

//It is used for the put or post method only, so that we can save what we are sending (object, req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/subcategory', subcategoryRouter);
app.use('/api/rating', ratingRouter);
app.use('/api/orders', orderRouter);
app.use('/api/ordersclients', orderclientRouter);

//connect with db
dotenv.config();
mongoose.set('autoIndex', false);
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false }).then(() => {
    console.log("¡.Conectado a Base De Datos.!");
}).catch((error) => {
    console.log(error.message);
})

//create PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Que Servidor Es: http://localhost:${PORT}`);
});