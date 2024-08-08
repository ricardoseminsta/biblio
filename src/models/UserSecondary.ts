import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserSecondaryInstance extends Model {
    id: number;
    email: string;
    password: string;
}

export const UserSecondary = sequelize.define<UserSecondaryInstance>("UserSecondary",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'userSecondary',
});

UserSecondary.sync({ alter: true });