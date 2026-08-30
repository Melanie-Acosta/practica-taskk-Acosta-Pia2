import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const TaskModel = sequelize.define("Task", {
    title: {
        type: DataTypes.STRING(100),    
    allowNull: false,
    unique: true,
    validate:{
        notEmpty: true
    }
    },
    description: { 
    type: DataTypes.STRING(100),
    allowNull: false,
    validate:{
        notEmpty: true
    }
    },
    isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    },
});

export default TaskModel;