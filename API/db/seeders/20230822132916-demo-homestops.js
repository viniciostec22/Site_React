'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    return queryInterface.bulkInsert('HomesTops', [
      {
        titleOneTop: 'Temos a solução',
        titleTwoTop:'Que a sua empresa precisa',
        titleThreeTop:'Podemos ajudar a sua empresa!',
        linkBtnTop:'http://localhost:8080/',
        textBtnTop:'Entre em contato',
        imageTop:'banner_top_v5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
      
  },

  async down (queryInterface) {
     await queryInterface.bulkDelete('HomesTops', null, {});
     
  }
};
