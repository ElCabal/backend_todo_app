import express from "express";
import connectDB from "./database/config.js";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import morgan from "morgan";

//Crear servidor express
const app = express();

//Variable de entorno
dotenv.config();

//Conección DB
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//Routing
app.use("/api/tasks", taskRoutes);

//Escuchar peticiones
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
