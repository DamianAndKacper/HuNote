import express from "express";
import cors from "cors";
import AuthenticationController from "./controllers/AuthenticationController";
import DatabaseConnection from "./DatabaseConnection";
import User from "./db/User";

export default class App {
    
    private app = express();
    private databaseConnection = new DatabaseConnection();

    private registerControllers(): App {
        this.app.use(this.makeAuthenticationController().registerRoute());

        return this;
    }

    private makeAuthenticationController() {
        return new AuthenticationController();
    }

    async startServer() {
        this.databaseConnection.run();
        this.app.use(cors()); // Used for API
        this.app.use(express.json()); // Data will be received in json format
        this.registerControllers();
    }
}