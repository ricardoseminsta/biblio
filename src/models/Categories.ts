import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface CategoriesInstance extends Model {
    id: number;
    name: string;
    slug: string;
}

export const Categorie = sequelize.define<CategoriesInstance>("categories",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    slug: {
        type: DataTypes.STRING,
        
    }
    }, {
    tableName: 'categories',
});

Categorie.sync({ alter: true });