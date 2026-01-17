import { OrderHistory } from '@/interfaces/order.interface';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type OrderHistoryAttributes = Optional<OrderHistory, 'id' | 'order_id'>;

export class OrderHistoryModel
    extends Model<OrderHistory, OrderHistoryAttributes>
    implements OrderHistory
{
    public id!: string;
    public order_id!: string;
    public status!: 'Pending' | 'In Transit' | 'Delivered' | 'Canceled';
    public description!: string;
    public location!: string;

    public created_at!: Date;
    public created_by!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt?: Date | null;
}

export default function (sequelize: Sequelize): typeof OrderHistoryModel {
    OrderHistoryModel.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUIDV4,
                defaultValue: DataTypes.UUIDV4,
            },
            order_id: {
                type: DataTypes.UUID,
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
            description: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            created_at: DataTypes.DATE,
            created_by: {
                allowNull: false,
                type: DataTypes.STRING(100),
            },
        },
        {
            tableName: 'order_status_histories',
            sequelize,
            createdAt: 'created_at',
            timestamps: false,
        },
    );

    return OrderHistoryModel;
}
