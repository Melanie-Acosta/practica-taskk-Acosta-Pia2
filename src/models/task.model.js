import { DataTypes, ForeignKeyConstraintError } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel} from "./user.model.js";

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
    is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Users",
            key:"id",
        }
    }
},);

export default TaskModel;

//relaciones
//relacion de uno a muchos
TaskModel.belongsTo(UserModel,{ foreignKey: "user_id", as: "author"});

UserModel.hasMany(TaskModel, { foreignKey: "user_id", as: "task"})