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

        // where: { id: 3}
    });

    const homesServices = await db.HomesServices.findOne({
        //indicar quais colunas qrecuperar 
        attributes: ['servTitle','servIconOne','servTitleOne','servDescOne','servIconTwo','servTitleTwo',
        'servDescTwo','servIconThree','servTitleThree','servDescThree'],

        //acrecentar condição para indicar qual registro deve ser retornado do banco de dados 

        // where: { id: 1}
    });
    const homesPremiums = await db.HomesPremiums.findOne({
        //indicar quais colunas qrecuperar 
        attributes: ['premTitle','premSubtitle','premDesc','premBtn_text','premBtn_link','premImage'],

        //acrecentar condição para indicar qual registro deve ser retornado do banco de dados 

        // where: { id: 1}
    });
    //console.log(homesTops)
    if((homesTops) && (homesServices) && (homesPremiums)) {
        return res.json({
            error: false,
            homesTops,
            homesServices,
            homesPremiums
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