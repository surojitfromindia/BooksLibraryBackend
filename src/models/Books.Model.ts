import * as mongoose from "mongoose";

type IBook = {
  title: string;
  isbn: string;
  edition: string;
  author_ids: mongoose.ObjectId[];
  keywords: string[];
  status?: "A" | "D";
  in_stock?: number;
  borrowed_stock?: number;
  available_stock?: number;
};
const BooksSchema = new mongoose.Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    edition: {
      type: String,
      required: true,
    },
    author_ids: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "authors",
      },
    ],
    keywords: [
      {
        type: String,
        required: true,
      },
    ],
    status: {
      type: String,
      required: true,
      enum: ["A", "D"],
    },

    in_stock: {
      type: Number,
      required: true,
      default: 100,
    },
    borrowed_stock: {
      type: Number,
      required: true,
      default: 0,
    },
    available_stock: {
      type: Number,
        required: true,
        default: 100,
    },
  },
  {
    virtuals: true,
  },
);
const BooksModel = mongoose.model<IBook>("books", BooksSchema);
BooksSchema.virtual("author_list", {
  localField: "author_ids",
  foreignField: "_id",
  ref: "authors",
});
export { BooksModel };
export type { IBook };
