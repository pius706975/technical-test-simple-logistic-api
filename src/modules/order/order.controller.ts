import { NextFunction, Request, Response } from 'express';
import {
    cancelOrderService,
    createOrderService,
    getOrdersService,
    trackOrderService,
    updateOrderStatusService,
} from './order.service';

export const createOrderController = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const orderData = req.body;
        const authorization = req.headers.authorization;
        if (!authorization) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const accessToken = authorization.split(' ')[1];
        const response = await createOrderService(orderData, accessToken);

        res.status(201).json({ message: 'New order created', response });
    } catch (error) {
        next(error);
    }
};

export const cancelOrderController = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const { orderId } = req.params;

        if (!orderId || Array.isArray(orderId)) {
            res.status(400).json({ message: 'Invalid order id' });
            return;
        }

        const authorization = req.headers.authorization;
        if (!authorization) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const accessToken = authorization.split(' ')[1];

        await cancelOrderService(orderId, 'Canceled', accessToken);

        res.status(200).json({ message: 'Order has been canceled' });
    } catch (error) {
        next(error);
    }
};

export const updateOrderStatusController = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const { orderId } = req.params;
        const { status, location, description } = req.body;

        if (!orderId || Array.isArray(orderId)) {
            res.status(400).json({ message: 'Invalid order id' });
            return;
        }

        const authorization = req.headers.authorization;
        if (!authorization) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }

        const accessToken = authorization.split(' ')[1];

        await updateOrderStatusService(
            orderId,
            status,
            location,
            description,
            accessToken,
        );

        res.status(200).json({ message: 'Order status updated' });
    } catch (error) {
        next(error);
    }
};

export const trackOrderController = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const { trackingNumber } = req.params;

        if (!trackingNumber || Array.isArray(trackingNumber)) {
            res.status(400).json({ message: 'invalid tracking number' });
            return;
        }

        const response = await trackOrderService(trackingNumber);

        res.status(200).json({ message: 'Order retrieved', response });
    } catch (error) {
        next(error);
    }
};

export const getOrdersController = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const { status, sender, recipient } = req.query;

        const authorization = req.headers.authorization;
        if (!authorization) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const response = await getOrdersService({
            status: status as
                | 'Pending'
                | 'In Transit'
                | 'Delivered'
                | 'Canceled',
            sender: sender as string | undefined,
            recipient: recipient as string | undefined,
        });

        if (response.orders.length <= 0) {
            res.status(404).json({ message: 'No orders found' });
        }

        res.status(200).json({ message: 'Orders retrieved', response });
    } catch (error) {
        next(error);
    }
};
