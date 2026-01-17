'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('orders', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.literal('uuid_generate_v4()'),
				primaryKey: true,
			},
			user_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT',
			},
			tracking_number: {
				type: Sequelize.STRING(50),
				allowNull: false,
				unique: true,
			},
			sender_name: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			recipient_name: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			origin: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			destination: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			status: {
				type: Sequelize.ENUM(
					'Pending',
					'In Transit',
					'Delivered',
					'Canceled',
				),
				allowNull: false,
				defaultValue: 'Pending',
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			created_by: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: true,
				defaultValue: null,
			},
			updated_by: {
				type: Sequelize.STRING(100),
				allowNull: true,
				defaultValue: null,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('orders');
	},
};
