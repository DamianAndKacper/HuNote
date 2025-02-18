import mongoose, { Document, Schema, Model } from 'mongoose';

export interface ICategory extends Document {
    CategoryParentId: mongoose.Schema.Types.ObjectId;
    CategoryName: String
}
export default class Category {
    private static CategorySchema = new Schema<ICategory>({
        CategoryParentId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true, default: 0 },
        CategoryName: {type: String, require: true}
    },
        { timestamps: true }
    );
    private static model: Model<ICategory> = mongoose.model<ICategory>("Category", Category.CategorySchema);

    public static Model(): Model<ICategory> { return this.model; }
}