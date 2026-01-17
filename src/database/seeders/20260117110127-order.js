'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('orders', [
            {
                id: '3dcfb535-c9a1-4c5a-9d7e-d5bfbe7ca573',
                user_id: '97a06507-14af-46eb-b890-276fa1e64e54',
                tracking_number: 'FH9500998150',
                sender_name: 'Rizky Maulana',
                recipient_name: 'Fajar Hidayat',
                origin: 'Jl. Gatot Subroto No. 110, Kel. Sei Sikambing C II, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20123',
                destination: 'Jl. Veteran No. 40, Kel. Padang Barat, Kec. Padang Barat, Kota Padang, Sumatera Barat 25115',
                status: 'Pending',
                created_at: '2026-01-17 19:05:50.099 +0800',
                created_by: 'Super Admin',
            },

            {
                id: '58512bfe-135b-430a-8ab5-e286861942f0',
                user_id: '97a06507-14af-46eb-b890-276fa1e64e54',
                tracking_number: 'FH9603530329',
                sender_name: 'Putri Anggraini',
                recipient_name: 'Nanda Saputra',
                origin: 'Jl. Teuku Umar No. 15, Kel. Dauh Puri Kauh, Kec. Denpasar Barat, Kota Denpasar, Bali 80114',
                destination: 'Jl. Pejanggik No. 77, Kel. Pejanggik, Kec. Mataram, Kota Mataram, Nusa Tenggara Barat 83126',
                status: 'Pending',
                created_at: '2026-01-17 19:06:00.353 +0800',
                created_by: 'Super Admin',
            },

            {
                id: '721b8c21-6f69-4133-ad47-52f49c9b11a1',
                user_id: '97a06507-14af-46eb-b890-276fa1e64e54',
                tracking_number: 'FH9070492575',
                sender_name: 'Andi Pratama',
                recipient_name: 'Budi Santoso',
                origin: 'Jl. Jenderal Sudirman No. 45, Kel. Karet Tengsin, Kec. Tanah Abang, Jakarta Pusat, DKI Jakarta 10220',
                destination: 'Jl. Asia Afrika No. 12, Kel. Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111',
                status: 'Delivered',
                created_at: '2026-01-17 19:05:07.049 +0800',
                created_by: 'Super Admin',
            },

            {
                id: '12ce127b-e9eb-4765-a3df-9b61aef77b98',
                user_id: '97a06507-14af-46eb-b890-276fa1e64e54',
                tracking_number: 'FH9238546156',
                sender_name: 'Siti Nurhaliza',
                recipient_name: 'Rina Kurniawati',
                origin: 'Jl. Raya Darmo No. 88, Kel. Darmo, Kec. Wonokromo, Surabaya, Jawa Timur 60241',
                destination: 'Jl. Ijen No. 25, Kel. Oro-Oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119',
                status: 'Canceled',
                created_at: '2026-01-17 19:05:23.854 +0800',
                created_by: 'Super Admin',
            },

            {
                id: '003e8d62-fc7d-47ed-8889-aae0c449ee57',
                user_id: '97a06507-14af-46eb-b890-276fa1e64e54',
                tracking_number: 'FH9392650545',
                sender_name: 'Dewi Lestari',
                recipient_name: 'Ahmad Fauzi',
                origin: 'Jl. Malioboro No. 56, Kel. Sosromenduran, Kec. Gedong Tengen, Yogyakarta 55271',
                destination: 'Jl. Pandanaran No. 90, Kel. Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50241',
                status: 'In Transit',
                created_at: '2026-01-17 19:05:39.265 +0800',
                created_by: 'Super Admin',
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
