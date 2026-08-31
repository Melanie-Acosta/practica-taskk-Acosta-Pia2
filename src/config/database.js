import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("tasks_users_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export const startDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Conexión a la base de datos esta lista");
    } catch (error) {
        console.error("No se pudo conectar a la base de datos", error);
    }
};