import { getOrdersFilter, Order } from '@/interfaces/order.interface';
import { validateCreateOrder } from './order.validator';
import { CustomError } from '@/utils/custom-error';
import repo from './order.repo';
import { generateTrackingNumber } from '@/utils/generate-tracking-number';
import { formatDate, getCurrentTime } from '@/utils/get-current-time';
import { verifyJWT } from '@/middlewares/jwt.service';
import { JWT_ACCESS_TOKEN_SECRET } from '@/config';
import { DB } from '@/database';

export const createOrderService = async (
    orderData: Order,
    accessToken: string,
) => {
    const decodedToken = await verifyJWT(
        accessToken,
        JWT_ACCESS_TOKEN_SECRET as string,
    );

    const { error } = validateCreateOrder(orderData);
    if (error) {
        throw new CustomError(error.details[0].message, 400);
    }

    return await DB.sequelize.transaction(async tr => {
        const newOrder = await repo.createOrder(
            {
                ...orderData,
                user_id: decodedToken.userId,
                tracking_number: generateTrackingNumber('FH', 10),
                created_at: getCurrentTime('Asia/Jakarta'),
                created_by: decodedToken.name,
            },
            {
                status: 'Pending',
                description: 'Order created',
                location: orderData.origin,
                created_by: decodedToken.name,
                created_at: getCurrentTime('Asia/Jakarta'),
            },
            tr,
        );

        return {
            order: {
                tracking_number: newOrder.tracking_number,
                sender_name: newOrder.sender_name,
                recipient_name: newOrder.recipient_name,
                origin: newOrder.origin,
                destination: newOrder.destination,
            },
        };
    });
};

export const cancelOrderService = async (
    orderId: string,
    status: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled',
    accessToken: string,
) => {
    const decodedToken = await verifyJWT(
        accessToken,
        JWT_ACCESS_TOKEN_SECRET as string,
    );

    const checkOrder = await repo.getOrderById(orderId);

    if (!checkOrder) {
        throw new CustomError(`Order not found`, 404);
    }

    if (checkOrder.status !== 'Pending') {
        throw new CustomError(`Order can't be canceled`, 400);
    }

    return await DB.sequelize.transaction(async tr => {
        await repo.updateOrderStatus(
            orderId,
            status,
            {
                status,
                location: checkOrder.origin,
                description: 'Order has been canceled',
                created_at: getCurrentTime('Asia/Jakarta'),
                created_by: decodedToken.name,
            },
            tr,
        );
    });
};

export const updateOrderStatusService = async (
    orderId: string,
    status: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled',
    location: string,
    description: string,
    accessToken: string,
) => {
    const decodedToken = await verifyJWT(
        accessToken,
        JWT_ACCESS_TOKEN_SECRET as string,
    );

    const checkOrder = await repo.getOrderById(orderId);

    if (!checkOrder) {
        throw new CustomError(`Order not found`, 404);
    }

    if (checkOrder.status === 'Delivered') {
        throw new CustomError(
            `Order has been delivered and order status can't be updated`,
            400,
        );
    }

    return await DB.sequelize.transaction(async tr => {
        await repo.updateOrderStatus(
            orderId,
            status,
            {
                status,
                location,
                description,
                created_at: getCurrentTime('Asia/Jakarta'),
                created_by: decodedToken.name,
            },
            tr,
        );
    });
};

export const trackOrderService = async (tn: string) => {
    const order = await repo.getOrderByTrackingNumber(tn);

    if (!order) {
        throw new CustomError(`${tn} not found`, 404);
    }

    const histories = await repo.getOrderHistories(order.id);

    return {
        tracking_number: order.tracking_number,
        sender_name: order.sender_name,
        recipient_name: order.recipient_name,
        origin: order.origin,
        destination: order.destination,
        status: order.status,
        created_at: formatDate(order.created_at, 'Asia/Jakarta'),
        histories: histories.map(h => ({
            status: h.status,
            location: h.location,
            description: h.description,
            created_at: formatDate(h.created_at, 'Asia/Jakarta'),
        })),
    };
};

export const getOrdersService = async (filters: getOrdersFilter) => {
    const data = await repo.getOrders(filters);

    return {
        orders: data.map(o => ({
            tracking_number: o.tracking_number,
            sender_name: o.sender_name,
            recipient_name: o.recipient_name,
            status: o.status,
            created_at: formatDate(o.created_at, 'Asia/Jakarta'),
            updated_at: o.updated_at
                ? formatDate(o.updated_at, 'Asia/Jakarta')
                : null,
        })),
    };
};
