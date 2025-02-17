import express from "express";
import AuthenticationController from "./AuthenticationController";

export default class RouterController {
    private static router = express.Router();

    public static InitRoutes = (): express.Router => {
        AuthenticationController.InitRoute(this.router);

        return this.router;
    }
}