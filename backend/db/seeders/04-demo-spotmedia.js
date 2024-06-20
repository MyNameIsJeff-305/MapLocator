const { SpotMedia } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotMedia.bulkCreate([
      {
        url: 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-springs/campaign/happily-whatever-happens/30sec-DIQF6883000H_FY20Q1DisneySpringsNewCampaignHappilyWhateverElla30C3TYQJB_30_SHOP.mp4?2023-03-27T22:04:58+00:00',
        spotId: 1
      },
      {
        url: 'https://miamieflorida.com.br/wp-content/uploads/2022/11/Disney-Springs-noite.jpg',
        spotId: 1
      }
    ], options)
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotMedia';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      description: { [Op.in]: ['https://miamieflorida.com.br/wp-content/uploads/2022/11/Disney-Springs-noite.jpg', 'https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disney-springs/campaign/happily-whatever-happens/30sec-DIQF6883000H_FY20Q1DisneySpringsNewCampaignHappilyWhateverElla30C3TYQJB_30_SHOP.mp4?2023-03-27T22:04:58+00:00'] }
    }, {});
  }
};
