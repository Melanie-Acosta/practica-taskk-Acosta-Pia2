import express from 'express';
import { startDB } from './src/config/database.js';
import { userRoutes } from './src/routes/user.routes.js';
import { taskRouter } from './src/routes/task.routes.js';
import { personRouter } from './src/routes/person.routes.js'; 

const app = express();
const PORT = 3000;

app.use(express.json());

// Log de diagnóstico general
app.use((req, res, next) => {
    console.log(`Petición entrante: ${req.method} ${req.url}`);
    next();
});

app.use("/api", userRoutes);
app.use("/api", taskRouter);
app.use("/api", personRouter); 

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo en el puerto${PORT}`);
});
