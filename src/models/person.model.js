import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const PersonModel = sequelize.define("Person", {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
},
);