import mongoose from "mongoose";

export default class DatabaseConnection {
    private CONNECTION_STRING = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.aawrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    public async run() {
        mongoose.Promise = Promise;
        mongoose.connect(this.CONNECTION_STRING);
        mongoose.connection.on("error", (error: Error) => console.log(error));
    }
}