//Incluir bibliotecas
//Gerenciar as requisições, rotas e URLS, entre outra funcionalidades 
const express = require("express");

//chama a função express 
const router = express.Router();

//Rota viazualizar com método GEt
router.get("/", (req, res) => {
    res.send("Home");
});

//Exporta a instrunção que está dentro da constante router 
module.exports = router;