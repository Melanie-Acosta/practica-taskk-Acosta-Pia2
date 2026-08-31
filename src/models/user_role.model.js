import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";
import { RoleModel } from "./role.model.js";

export const UserRoleModel = sequelize.define("User_Role", {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
});

// Relaciones de Muchos a Muchos (N:M)
UserModel.belongsToMany(RoleModel, {
    through: UserRoleModel,
    foreignKey: "user_id",
    as: "roles",
});

RoleModel.belongsToMany(UserModel, {
  through: UserRoleModel, // Corregido: apuntar a UserRoleModel
  foreignKey: "role_id",  // Corregido: quitada la 'h' de más
  as: "users",            // Recomendado: plural para relación N:M
});