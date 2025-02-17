import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IType extends Document {
    TypeName: String;
}
export default class Type {
    private static TypeSchema = new Schema<IType>({
        TypeName: {type: String, require: true}
    },
        { timestamps: true }
    );
    private static model: Model<IType> = mongoose.model<IType>("Type", Type.TypeSchema);

    public static Model(): Model<IType> { return this.model; }
}