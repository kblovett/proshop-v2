import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Dimec API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
