//Incluir bibliotecas
//Gerenciar as requisições, rotas e URLS, entre outra funcionalidades 
const express = require("express");

//incluir o arquivo que possui a conexão com o banco dados
const db = require('./../db/models')
//chama a função express 
const router = express.Router();

//Rota viazualizar com método GEt
router.get("/", async (req, res) => {
    //recuperar o registro do banco de dados 
    const homesTops = await db.HomesTops.findOne({
        //indicar quais colunas qrecuperar 
        attributes: ['titleOneTop','titleTwoTop','titleThreeTop','linkBtnTop','textBtnTop','imageTop'],

        //acrecentar condição para indicar qual registro deve ser retornado do banco de dados 

        where: { id: 3}
    });
    //console.log(homesTops)
    if(homesTops) {
        return res.json({
            error: false,
            homesTops
        });
    }else{
        return res.status(400).json({
            error: true,
            message:"Erro: não encontrado conteudo da pagina home do site"
        });
    }
    
});

//Exporta a instrunção que está dentro da constante router 
module.exports = router;