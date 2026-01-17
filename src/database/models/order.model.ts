import { Order } from '@/interfaces/order.interface';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type OrderCreationAttributes = Optional<Order, 'id'>;

export class OrderModel
    extends Model<Order, OrderCreationAttributes>
    implements Order
{
    public id!: string;
    public user_id!: string;
    public tracking_number!: string;
    public sender_name!: string;
    public recipient_name!: string;
    public origin!: string;
    public destination!: string;
    public status!: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled';

    public created_at!: Date;
    public created_by!: string;
    public updated_at?: Date | null;
    public updated_by?: string;

    public readonly createdAt!: Date;
    public readonly updatedAt?: Date | null;
}

export default function (sequelize: Sequelize): typeof OrderModel {
    OrderModel.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUIDV4,
                defaultValue: DataTypes.UUIDV4,
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            tracking_number: {
                type: DataTypes.STRING(),
                allowNull: false,
                unique: true,
            },
            sender_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            recipient_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            origin: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            destination: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM(
                    'Pending',
                    'In Transit',
                    'Delivered',
                    'Canceled',
                ),
                defaultValue: 'Pending',
            },
            created_at: DataTypes.DATE,
            created_by: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
            updated_at: DataTypes.DATE,
            updated_by: {
                allowNull: true,
                type: DataTypes.STRING(100),
            },
        },
        {
            tableName: 'orders',
            sequelize,
            createdAt: 'created_at',
            updatedAt: false,
            timestamps: true,
        },
    );

    return OrderModel;
}
