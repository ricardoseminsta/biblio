import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface CategoriesInstance extends Model {
    categoria_id: number;
    nome: string;
}

export const Categorie = sequelize.define<CategoriesInstance>("categoria",{
    categoria_id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nome: {
        type: DataTypes.STRING,
        unique: true
    }
    }, {
    tableName: 'categoria',
});

// Categorie.sync({ alter: true });