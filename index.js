require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao Banco de Dados! ✅'))
  .catch((err) => console.error('Erro ao conectar ao banco:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Motor da Rede Patinhas Club está rodando! 🐾');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
