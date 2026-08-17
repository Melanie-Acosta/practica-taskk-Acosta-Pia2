import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const TaskModel = sequelize.define("Task", {
    title: {
        type: DataTypes.STRING(100),    
    allowNull: false,
    unique: true,
    },
    description: { 
    type: DataTypes.STRING(100),
    allowNull: false,
    },
    isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
    },
});

export default TaskModel;