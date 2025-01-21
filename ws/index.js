import express, { json } from 'express';
import connectDB from './db.js';
import cors from 'cors'

// Rotas
import servicoRoutes from './src/routes/servico.route.js';
import clienteRoutes from './src/routes/cliente.route.js';
import agendamentoRoutes from './src/routes/agendamento.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar banco de dados
connectDB();

// Middleware para parsear JSON
app.use(json());

const corsOptions = {
  origin: 'https://annelimpweb.onrender.com',
  optionsSuccessStatus: 200,
};
// Use CORS middleware
app.use(cors());

// Rotas
app.use('/servicos', servicoRoutes); 
app.use('/clientes', clienteRoutes);
app.use('/agendamentos', agendamentoRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
