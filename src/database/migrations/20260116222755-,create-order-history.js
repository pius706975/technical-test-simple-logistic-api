'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('order_status_histories', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
                primaryKey: true,
            },

            order_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'orders',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },

            status: {
                type: Sequelize.ENUM(
                    'Pending',
                    'In Transit',
                    'Delivered',
                    'Canceled',
                ),
                allowNull: false,
            },

            description: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },

            location: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },

            created_by: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('order_status_histories');
    },
};
