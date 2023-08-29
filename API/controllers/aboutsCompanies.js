//Incluir bibliotecas
//Gerenciar as requisições, rotas e URLS, entre outra funcionalidades 
const express = require("express");

//incluir o arquivo que possui a conexão com o banco dados
const db = require('../db/models')
//chama a função express 
const router = express.Router();

//Rota viazualizar com método GEt
router.get("/", async (req, res) => {
    //recuperar os registro do banco de dados 
    const aboutsCompanies = await db.AboutsCompanies.findAll({
        //indicar quais colunas qrecuperar 
        attributes: ['id','title','description','image','situationAboutId'],

        //buscar dados na tabela secundaria 
        include:[{
            model:db.SituationsAbouts,
            attributes:['nameSituation']
        }],

        //ordeenar os rgistros pela coluna id na forma decreescente
        order:[['id', 'DESC']],

        //acrecentar condição para indicar qual registro deve ser retornado do banco de dados 

         where: { situationAboutId: 1}
    });

   
    //console.log(homesTops)
    if(aboutsCompanies) {
        return res.json({
            error: false,
            aboutsCompanies
        });
    }else{
        return res.status(400).json({
            error: true,
            message:"Erro: não encontrado conteudo da pagina sobre empreesa"
        });
    }
    
});

//Exporta a instrunção que está dentro da constante router 
module.exports = router;