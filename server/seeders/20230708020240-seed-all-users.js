'use strict';

const { hashedPassword } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
      nama:"Ananda Bayu",
      email:"bayu@email.com",      
      password: hashedPassword("testtest"),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama:"User1",
      email:"user1@email.com",      
      password: hashedPassword("testtest"),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama:"User2",
      email:"user2@email.com",      
      password: hashedPassword("testtest"),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama:"Sukoco",
      email:"sukoco@email.com",      
      password: hashedPassword("testtest"),
      createdAt: new Date(),
      updatedAt: new Date()
    }]
     await queryInterface.bulkInsert('Users', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {
      truncate: true, restartIdentity: true, cascade: true
    });
  }
};
