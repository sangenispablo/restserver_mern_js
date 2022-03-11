import express from "express";
import cors from "cors";

import userRouter from "../routes/usuarios.js";
import dbConnection from "../database/config.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    
    // aca vamos a ir poniendo las uri de las rutas
    // comienzo por las de los usuarios
    this.usuarioUri = "/api/usuarios";

    // Conecion a la BD
    this.connectionDb();
    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }

  async connectionDb() {
    await dbConnection();
  }

  middlewares() {
    // middlewares globales
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuarioUri, userRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto: ${this.port}`);
    });
  }
}

export default Server;
