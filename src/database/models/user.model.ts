import { User } from '@/interfaces/user.interface';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export type UserCreationAttributes = Optional<User, 'id' | 'username'>;

export class UserModel
    extends Model<User, UserCreationAttributes>
    implements User
{
    public id!: string;
    public email!: string;
    public name!: string;
    public username!: string;
    public password!: string;

    public created_at!: Date;
    public updated_at?: Date | null;

    public readonly createdAt!: Date;
    public readonly updatedAt?: Date | null;
}

export default function (sequelize: Sequelize): typeof UserModel {
    UserModel.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUIDV4,
                defaultValue: DataTypes.UUIDV4,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: true,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING(255),
            },
            created_at: DataTypes.DATE,
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: null
            },
        },
        {
            tableName: 'users',
            sequelize,
            createdAt: 'created_at',
            updatedAt: false,
            timestamps: true,
        },
    );

    return UserModel;
}
