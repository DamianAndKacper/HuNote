import User from "../db/User";
import { Router, Request, Response} from "express";
import AuthHelper from "../helpers/AuthHelper";

export default class AuthenticationController {
    
    public static InitRoute(router: Router) {
        router.post("auth/register", this.register);
        router.post("auth/login", this.login);
    }

    static async login(req: Request, res: Response): Promise<void> {
        try {
            const {username, password} = req.body;

            if (!username || !password) {
                res.sendStatus(400);
                return;
            }

            const user = await User.GetUserByName(username).select("+authentication.salt +authentication.password");
            if (!user) {
                res.sendStatus(400);
                return;
            }

            const expectedHash = AuthHelper.Authentication(user.authentication.salt, password);

            if (user.authentication.password != expectedHash) {
                res.sendStatus(403);
                return;
            }

            const salt = AuthHelper.Random();

            user.authentication.sessionToken = AuthHelper.Authentication(salt, user._id.toString());

            await user.save();

            res.cookie("HUNOTE-AUTH", user.authentication.sessionToken, { domain: "", path: "/"});

            res.status(200).json(user).end();
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    }
    static async register(req: Request, res: Response): Promise<void> {
        try {
            const {username, email, password} = req.body;

            if (!email || !password || !username) {
                res.sendStatus(400);
                return;
            }

            const existingUser = await User.GetUserByEmail(email);
            if (existingUser) {
                res.sendStatus(400);
                return;
            }

            const salt = AuthHelper.Random();

            const user = await User.createUser({
                username,
                email,
                authentication: {
                    salt,
                    pasword: AuthHelper.Authentication(salt, password),
                },
            })
            res.status(200).json(user).end();
        } catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    }
}