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
      item_name: "Sony KDL-50W800C",
      stock: 30,
      price: 2000000,
      imageUrl: "https://th.bing.com/th/id/OIP.VjfNCM-FnMIqXWYyIgls8gHaFj?pid=ImgDet&rs=1",
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
