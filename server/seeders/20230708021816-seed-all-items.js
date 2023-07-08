'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = [{
      item_name: "LG 42LS3400",
      stock: 20,
      price: 3000000,
      imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/LG_Electronics_42LS3400_42LS3400_42_LED_TV_845234.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      item_name: "Sony Bravia S Series KDL32S5100",
      stock: 30,
      price: 2000000,
      imageUrl: "https://th.bing.com/th/id/R.2b83b8e8194c80c10e24a170469b5254?rik=16qhySBlMslxiw&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2f604939.jpg&ehk=JCrtIn2n%2bX6%2fHz7VcoC%2bdDAEVlooIYyhNSQ5BfJFxNM%3d&risl=&pid=ImgRaw&r=0",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      item_name: "Samsung KU7000",
      stock: 25,
      price: 4000000,
      imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/samsung_un55ku7000fxza_ku7000_series_55_class_uhd_smart_1235503.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Items', data)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {
      truncate: true, restartIdentity: true, cascade: true
    });
  }
};
