const { Spot } = require('../models')

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        createdBy: 1,
        address: "1486 Buena Vista Dr, Lake Buena Vista, FL 32830",
        city: "Orlando",
        state: "Florida",
        country: "United States Of America",
        zipCode: 32830,
        lat: 28.3723084,
        lng: -81.526998,
        name: "Disney Springs",
        description: "Disney Springs is an outdoor shopping, dining, and entertainment complex at Walt Disney World Resort in Florida. It features over 100 stores, including unique boutiques and flagship brands, diverse dining options from quick bites to fine dining, and entertainment such as live music, a movie theater, and Cirque du Soleil. The area is divided into four themed neighborhoods: The Landing, Marketplace, West Side, and Town Center, each offering a unique experience.",
        price: 12345.67
      }
    ], options)
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Disney Springs'] }
    }, {});
  }
};
