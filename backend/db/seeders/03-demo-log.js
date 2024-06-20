const { Log } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Log.bulkCreate([
      {
        userId: 1,
        spotId: 1,
        action: "created",
        description: `Demo description`
      }
    ], options)
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Logs';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      description: { [Op.in]: ['User 1 created 1'] }
    }, {});
  }
};
