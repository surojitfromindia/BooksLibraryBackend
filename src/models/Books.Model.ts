import * as mongoose from "mongoose";

type IBook = {
  title: string;
  isbn: string;
  edition: string;
  author_ids: mongoose.ObjectId[];
  keywords: string[];
  status: "A" | "D";
};
const BooksSchema = new mongoose.Schema<IBook>({
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
});
const BooksModel = mongoose.model<IBook>("books", BooksSchema);

export { BooksModel };
export type { IBook };
