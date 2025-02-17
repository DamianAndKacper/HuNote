import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    authentication: IAuthentication;
    createdAt: Date;
    updatedAt: Date;
}
export interface IAuthentication extends Document {
    password: string,
    salt: string,
    sessionToken: string,
}
export default class User {
    private static AuthenticationSchema = new Schema<IAuthentication>({
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    })
    private static UserSchema = new Schema<IUser>({
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        authentication: this.AuthenticationSchema,
    },
        { timestamps: true }
    );
    private static model: Model<IUser> = mongoose.model<IUser>("User", User.UserSchema);

    public static Model(): Model<IUser> { return this.model; }
}
