import crypto from "crypto";

export default class AuthHelper {
    public static Random = () => crypto.randomBytes(128).toString("base64");
    static SECRET: string = process.env.SECRET ?? "";
    public static Authentication = (salt: string, password: string) => {
        return crypto.createHmac("sha256", [salt, password].join("/")).update(this.SECRET).digest("hex");
    }
}