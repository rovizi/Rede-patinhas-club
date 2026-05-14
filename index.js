const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const express = require('express'); // Adicionado para o Render aceitar
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Conexão com o MongoDB usando Variável de Ambiente
// No Render, a KEY deve ser MONGODB_URI
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao Banco de Dados! ✅'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// 2. Configuração do E-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'astroshoppingdigital@gmail.com',
    pass: 'qpdtmevlbkdtzuhj' // Se esta for sua "Senha de App", tudo bem.
  }
});

// 3. Rota básica para o Render não dar erro de porta
app.get('/', (req, res) => {
  res.send('Servidor do Motor de E-mail Rodando! 🚀');
});

// 4. Função para enviar e-mail (Exemplo simplificado)
const mailOptions = {
  from: 'astroshoppingdigital@gmail.com',
  to: 'astroshoppingdigital@gmail.com',
  subject: 'Bem-vindo ao Rede Patinhas Club!',
  html: '<h1 style="color: #20b2aa;">Olá! Seu motor de e-mail está funcionando.</h1>'
};

// Dispara o e-mail apenas quando o servidor inicia (para teste)
app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar:', error);
    } else {
      console.log('E-mail enviado com sucesso! 📧');
    }
  });
});
