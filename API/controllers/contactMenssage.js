//Incluir bibliotecas
//Gerenciar as requisições, rotas e URLS, entre outra funcionalidades 
const express = require("express")

const router = express.Router();

router.post("/", (req, res) => {
    res.send("cadastrar mensagem")
});

module.exports = router;