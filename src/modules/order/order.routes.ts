import express from 'express';
import {
    cancelOrderController,
    createOrderController,
    getOrdersController,
    trackOrderController,
    updateOrderStatusController,
} from './order.controller';
import { authMiddleware } from '@/middlewares/auth.middleware';

const orderRouter = express.Router();

orderRouter.post('', authMiddleware, createOrderController);
orderRouter.patch(
    '/status/:orderId',
    authMiddleware,
    updateOrderStatusController,
);
orderRouter.patch('/cancel/:orderId', authMiddleware, cancelOrderController);
orderRouter.get('/orders', authMiddleware, getOrdersController);
orderRouter.get('/track/:trackingNumber', trackOrderController);

export default orderRouter;
