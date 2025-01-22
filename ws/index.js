import express, {json} from 'express';
import connectDB from './db.js';
import cors from 'cors'
import serviceRoutes from './src/routes/service.route.js';
import customerRoutes from './src/routes/customer.route.js';
import bookingRoutes from './src/routes/booking.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(json());

const corsOptions = {
  origin: 'https://annelimpweb.onrender.com',
  optionsSuccessStatus: 200,
};

app.use(cors());

app.use('/service', serviceRoutes);
app.use('/customer', customerRoutes);
app.use('/booking', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
