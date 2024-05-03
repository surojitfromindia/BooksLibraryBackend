import * as mongoose from "mongoose";

type IBook = {
  title: string;
  isbn: string;
  edition: string;
  author_ids: mongoose.ObjectId[];
  keywords: string[];
  status: "A" | "D";
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
  },
  {
    virtuals: true
  },
);
const BooksModel = mongoose.model<IBook>("books", BooksSchema);
BooksSchema.virtual("authors", {
  localField: "author_ids",
  foreignField: "_id",
  ref: "authors",
});
export { BooksModel };
export type { IBook };
