import express from 'express';
import products from './data/product.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.get('/', (req, res) => {
    res.send('API Is Running!!');
});

app.get('/api/products', (req, res) => {
    try {
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
