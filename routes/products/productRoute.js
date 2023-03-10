import express from 'express';
import Product from '../../models/products/productModel.js';

const productRouter = express.Router();

// get all products -> for frontend
productRouter.get('/all', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

//get product by id
productRouter.get('/find/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "¡.Producto NO Encontrado.!" });
    }
});

//count products for admin panel
productRouter.get('/countProducts', async (req, res) => {

    try {
        const countProducts = await Product.countDocuments();
        res.status(200).json({ count: countProducts });

    } catch (err) {
        console.log(err.message);
    }

});

//delete product
productRouter.delete('/delete/:id', async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('¡.El Producto Ha Sido Eliminado.!');

    } catch (err) {
        console.log('¡.NO Se Puede Eliminar.!');
    }

});

// update product
productRouter.put('/update', async (req, res) => {

    const product = await Product.findById(req.body._id);

    //if product exists
    if (product) {
        product.title = req.body.title || product.title;
        product.category = req.body.category || product.category;
        product.subcategory = req.body.subcategory || product.subcategory;
        product.countInStock = req.body.countInStock || product.countInStock;
        product.description = req.body.description || product.description;
        product.price = req.body.price || product.price;
        product.star = req.body.star || product.star;
        product.sizes = req.body.sizes || product.sizes;
        product.colors = req.body.colors || product.colors;
        product.image = req.body.image || product.image;
        product.imagesOnes = req.body.imagesOnes || product.imagesOnes;

        const updatedProduct = await product.save();
        res.send({

            _id: updatedProduct._id,
            title: updatedProduct.title,
            category: updatedProduct.category,
            subcategory: updatedProduct.subcategory,
            countInStock: updatedProduct.countInStock,
            description: updatedProduct.description,
            price: updatedProduct.price,
            star: updatedProduct.star,
            sizes: updatedProduct.sizes,
            colors: updatedProduct.colors,
            image: updatedProduct.image,
            imagesOnes: updatedProduct.imagesOnes,

        });
    } else {

        res.status(401).send({ message: '¡.Producto NO Encontrado.!' });

    }
});

// for add product -> from admin panel
productRouter.post('/add', async (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        category: req.body.category,
        subcategory: req.body.subcategory,
        countInStock: req.body.countInStock,
        description: req.body.description,
        price: req.body.price,
        star: req.body.star + '★',
        sizes: req.body.sizes,
        colors: req.body.colors,
        image: req.body.image,
        imagesOnes: req.body.imagesOnes,
    });
    const product = await newProduct.save();
    res.send({
        _id: product._id,
        title: product.title,
        category: product.category,
        subcategory: product.subcategory,
        countInStock: product.countInStock,
        description: product.description,
        price: product.price,
        star: product.star,
        sizes: product.sizes,
        colors: product.colors,
        image: product.image,
        imagesOnes: product.imagesOnes,
    })
});

export default productRouter;