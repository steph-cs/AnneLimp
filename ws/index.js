import express, { json } from 'express';
import connectDB from './db.js';

// Rotas
import servicoRoutes from './src/routes/servico.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar banco de dados
connectDB();

// Middleware para parsear JSON
app.use(json());

// Rotas
app.use('/servicos', servicoRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
