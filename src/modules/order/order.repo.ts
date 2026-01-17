import { DB } from '@/database';
import {
    getOrdersFilter,
    Order,
    OrderHistory,
} from '@/interfaces/order.interface';
import { Op } from 'sequelize';
import { Transaction } from 'sequelize';

const repo = {
    createOrder: async (
        orderData: Order,
        historyData: Omit<OrderHistory, 'id' | 'order_id'>,
        tr: Transaction,
    ): Promise<Order> => {
        const order = await DB.Orders.create(orderData, { transaction: tr });

        await DB.OrderHistories.create(
            {
                ...historyData,
                order_id: order.id,
            },
            { transaction: tr },
        );

        return order;
    },

    updateOrderStatus: async (
        orderId: string,
        status: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled',
        historyData: Omit<OrderHistory, 'id' | 'order_id'>,
        tr: Transaction,
    ): Promise<void> => {
        const [updated] = await DB.Orders.update(
            { status },
            { where: { id: orderId }, transaction: tr },
        );

        if (!updated) {
            throw new Error('Order not found');
        }

        await DB.OrderHistories.create(
            {
                ...historyData,
                order_id: orderId,
            },
            { transaction: tr },
        );
    },

    getOrders: async (filters: getOrdersFilter): Promise<Order[]> => {
        const whereClaus: any = {};

        if (filters.status) {
            whereClaus.status = filters.status;
        }

        if (filters.sender) {
            whereClaus.sender_name = { [Op.iLike]: `%${filters.sender}%` };
        }

        if (filters.recipient) {
            whereClaus.recipient_name = {
                [Op.iLike]: `%${filters.recipient}%`,
            };
        }

        return await DB.Orders.findAll({
            where: whereClaus,
            order: [['created_at', 'DESC']],
        });
    },

    getOrderById: async (id: string): Promise<Order | null> => {
        return await DB.Orders.findOne({ where: { id: id } });
    },

    getOrderByTrackingNumber: async (tn: string): Promise<Order | null> => {
        return await DB.Orders.findOne({
            where: { tracking_number: tn },
        });
    },

    getOrderHistories: async (orderId: string): Promise<OrderHistory[]> => {
        return await DB.OrderHistories.findAll({
            where: { order_id: orderId },
            order: [['created_at', 'ASC']],
        });
    },
};

export default repo;
