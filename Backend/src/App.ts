import express from "express";
import cors from "cors";
import RouterController from "./controllers/RouterController";
import DatabaseConnection from "./DatabaseConnection";

export default class App {
    
    private app = express();
    private databaseConnection = new DatabaseConnection();

    async startServer() {
        this.databaseConnection.run();
        this.app.use(cors()); // Used for API
        this.app.use(express.json()); // Data will be received in json format
        this.app.use(RouterController.InitRoutes());
    }
}