'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('order_status_histories', [
            {
                id: '62b80169-7f5e-40b9-9b7a-4a561b783e14',
                order_id: '003e8d62-fc7d-47ed-8889-aae0c449ee57',
                status: 'In Transit',
                description: 'Package is out for delivery',
                location: 'Delivery Courier - Semarang',
                created_at: '2026-01-17 19:23:52.603 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '42e82298-4a48-44cf-bec4-b68c5bf94597',
                order_id: '003e8d62-fc7d-47ed-8889-aae0c449ee57',
                status: 'In Transit',
                description: 'Package has arrived at destination sorting center',
                location: 'Sorting Center Semarang',
                created_at: '2026-01-17 19:23:39.364 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '46180e49-f956-4ff2-884f-10b234f1df0d',
                order_id: '003e8d62-fc7d-47ed-8889-aae0c449ee57',
                status: 'In Transit',
                description: 'Package is in transit to destination city',
                location: 'Sorting Center Jakarta',
                created_at: '2026-01-17 19:23:21.197 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '48b7fb8b-010c-4897-9859-3e0a1b59a378',
                order_id: '003e8d62-fc7d-47ed-8889-aae0c449ee57',
                status: 'In Transit',
                description: 'Package is being sorted at origin sorting center',
                location: 'Sorting Center Yogyakarta',
                created_at: '2026-01-17 19:23:08.232 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '8f31146b-a995-4de4-b457-f523c3c6f53a',
                order_id: '003e8d62-fc7d-47ed-8889-aae0c449ee57',
                status: 'In Transit',
                description: 'Package has been picked up from sender',
                location: 'Sender Address - Yogyakarta',
                created_at: '2026-01-17 19:22:53.655 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '64c677bb-0eea-4a03-a6ad-0c6b838cabec',
                order_id: '12ce127b-e9eb-4765-a3df-9b61aef77b98',
                status: 'Canceled',
                description: 'Order has been canceled',
                location: 'Jl. Raya Darmo No. 88, Kel. Darmo, Kec. Wonokromo, Surabaya, Jawa Timur 60241',
                created_at: '2026-01-17 19:17:50.058 +0800',
                created_by: 'Super Admin'
            },

            {
                id: 'dc14142e-5150-4035-9993-1839598c684f',
                order_id: '721b8c21-6f69-4133-ad47-52f49c9b11a1',
                status: 'Delivered',
                description: 'Package is delivered',
                location: 'Jl. Asia Afrika No. 12, Kel. Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111',
                created_at: '2026-01-17 19:15:05.809 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '0e82283a-8989-4fef-a06a-5b53b1c6536d',
                order_id: '721b8c21-6f69-4133-ad47-52f49c9b11a1',
                status: 'In Transit',
                description: 'Package is ready to deliver',
                location: 'Sorting Center Bandung',
                created_at: '2026-01-17 19:13:34.932 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '500a36e9-bb60-4c19-9e8d-e1f0a475a438',
                order_id: '721b8c21-6f69-4133-ad47-52f49c9b11a1',
                status: 'In Transit',
                description: 'Package is being processed',
                location: 'Sorting Center Jakarta',
                created_at: '2026-01-17 19:12:30.676 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '44608813-db91-4f93-ad63-a4d19556a96a',
                order_id: '58512bfe-135b-430a-8ab5-e286861942f0',
                status: 'Pending',
                description: 'Order created',
                location: 'Jl. Teuku Umar No. 15, Kel. Dauh Puri Kauh, Kec. Denpasar Barat, Kota Denpasar, Bali 80114',
                created_at: '2026-01-17 19:06:00.353 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '6ad54f4c-5ec1-4f67-a00a-3abb6563deea',
                order_id: '3dcfb535-c9a1-4c5a-9d7e-d5bfbe7ca573',
                status: 'Pending',
                description: 'Order created',
                location: 'Jl. Gatot Subroto No. 110, Kel. Sei Sikambing C II, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20123',
                created_at: '2026-01-17 19:05:50.099 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '0526cfda-e2dc-4c93-b468-540898660db5',
                order_id: '003e8d62-fc7d-47ed-8889-aae0c449ee57',
                status: 'Pending',
                description: 'Order created',
                location: 'Jl. Malioboro No. 56, Kel. Sosromenduran, Kec. Gedong Tengen, Yogyakarta 55271',
                created_at: '2026-01-17 19:05:39.266 +0800',
                created_by: 'Super Admin'
            },

            {
                id: '52ba79c8-e92a-45b4-8a82-19f8d8fb348f',
                order_id: '12ce127b-e9eb-4765-a3df-9b61aef77b98',
                status: 'Pending',
                description: 'Order created',
                location: 'Jl. Raya Darmo No. 88, Kel. Darmo, Kec. Wonokromo, Surabaya, Jawa Timur 60241',
                created_at: '2026-01-17 19:05:23.855 +0800',
                created_by: 'Super Admin'
            },

            {
                id: 'b3220d18-c018-4ce3-a6e5-70cd03b12ae4',
                order_id: '721b8c21-6f69-4133-ad47-52f49c9b11a1',
                status: 'Pending',
                description: 'Order created',
                location: 'Jl. Jenderal Sudirman No. 45, Kel. Karet Tengsin, Kec. Tanah Abang, Jakarta Pusat, DKI Jakarta 10220',
                created_at: '2026-01-17 19:05:07.061 +0800',
                created_by: 'Super Admin'
            },
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
