import mongoose, { Document, Schema, Model, Types} from 'mongoose';

export interface IUser extends Document {
    _id: Types.ObjectId;
    username: string;
    email: string;
    authentication: IAuthentication;
    createdAt: Date;
    updatedAt: Date;
}
export interface IAuthentication extends Document {
    id: Types.ObjectId;
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

    public static GetUserByEmail = (email: String) => this.model.findOne({ email });
    public static GetUserByName = (username: String) => this.model.findOne({ username });
    public static createUser = (values: Record<string, any>) => new this.model(values).save().then((user) => user.toObject());
}
