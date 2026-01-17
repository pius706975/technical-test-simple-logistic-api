'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert('users', [
			{
				// Password = Admin@123
				id: '97a06507-14af-46eb-b890-276fa1e64e54',
				name: 'Super Admin',
				username: 'super-mki6yokt',
				email: 'admin@example.com',
				password: '$2b$10$n2R.J5/lNcxUsoUBouzhpOgIVqOTM.wQNxLjhW/xK/ArwA534wDbq',
				created_at: '2026-01-17 18:55:43.831 +0800'
			}
		])
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
};
