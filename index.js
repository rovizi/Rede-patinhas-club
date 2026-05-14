require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com o Banco de Dados usando a variável que criamos no Render
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
