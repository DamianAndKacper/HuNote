import { Router } from "express";

export default class AuthenticationController {
    
    private router = Router();

    registerRoute(): Router {
        this.router.post("/login");

        return this.router;
    }
}