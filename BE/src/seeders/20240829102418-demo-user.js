'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Trung',
        lastName: 'Trần Viết',
        email: '21110859@student.hcmute.edu.vn',
        password: '1234',
        address: '01 Võ Văn Ngân Tp.Thủ Đức Tp.HCM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
