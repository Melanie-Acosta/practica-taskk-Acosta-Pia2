import express from 'express';
import { startDB } from './src/config/database.js';
import { userRoutes } from './src/routes/user.routes.js';
import { taskRouter } from './src/routes/task.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", taskRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo en el puerto${PORT}`);
});