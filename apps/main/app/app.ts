// Environment
require("dotenv").config();
// Server
import Server from "./models/Server";

// Server init
const server = Server.getInstance;

// Server Up
server.startServer();