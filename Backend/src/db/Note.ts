import mongoose, { Document, Schema, Model } from 'mongoose';

export interface INote extends Document {
    noteTitle: string;
    noteContent: string;
    categoryId: mongoose.Schema.Types.ObjectId;
    typeId: mongoose.Schema.Types.ObjectId;
    noteSetDate: Date;
    lastTimeOpened: Date;
    timesOpened: Number;
    isFavourite: Boolean;
    createdAt: Date;
    updatedAt: Date;
}
export default class Note {
    private static NoteSchema = new Schema<INote>({
        noteTitle: { type: String, required: true, unique: true },
        noteContent: { type: String, required: true, unique: true },
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
        typeId: { type: mongoose.Schema.Types.ObjectId, ref: "Type" },
        noteSetDate: { type: Date },
        lastTimeOpened: { type: Date, default: new Date() },
        timesOpened: { type: Number, default: 0 },
        isFavourite: { type: Boolean, required: true, default: false },
    },
        { timestamps: true }
    );
    private static model: Model<INote> = mongoose.model<INote>("Note", Note.NoteSchema);

    public static Model(): Model<INote> { return this.model; }
}