import dotenv from "dotenv";

// mi server express
import Server from "./server/index.js";

dotenv.config();
const server = new Server();
server.listen();
