//Incluir bibliotecas
//Gerenciar as requisições, rotas e URLS, entre outra funcionalidades 
const express = require('express');
//chamar a função express
const app = express();

//Testar conexão com banco de dados
const db = require("./db/models");

//incluir as controlles
const home = require("./controllers/home");
const contactMenssage = require("./controllers/contactMenssage");

//criar rotas
app.use('/home', home);
app.use('/contact-message', contactMenssage);



//Iniciar o servidor na porta 8080, criar a função usando modelo Arrow function para retorna a mesagem de sucesso
app.listen(8080, ()=> {
    console.log("Running: http://localhost:8080/")
});