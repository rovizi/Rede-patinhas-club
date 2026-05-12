const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://astroshoppingdigital:qpdtmev1bkdtzuhj@cluster0.p83v0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Conectado ao Banco de Dados! ✅'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Configuração do Transportador de E-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'astroshoppingdigital@gmail.com',
    pass: 'qpdtmev1bkdtzuhj'
  }
});

// Função para enviar o e-mail de teste
const mailOptions = {
  from: 'astroshoppingdigital@gmail.com',
  to: 'astroshoppingdigital@gmail.com', 
  subject: 'Bem-vindo ao Rede Patinhas Club!',
  html: '<h1 style="color: #20b2aa;">Olá! Seu motor de e-mail está funcionando.</h1>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erro ao enviar:', error);
  }
  console.log('E-mail enviado com sucesso! 📧');
});
